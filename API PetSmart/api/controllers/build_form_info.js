const { Sequelize, DataTypes } = require("sequelize");
const BuildFormInfo = require("../models/build_form_info");
const FormConfig = require("../models/user_login");
const BuildForm = require("../models/build_form");
const helpers = require("../helpers/helpers");

/**
 * Return the configuration set for this form
 * 
 * @param {integer} id_form_config
 * @private 
 */
 async function getFormConfig_(id, sequelize){
  const config = await FormConfig(
    sequelize,
    Sequelize.DataTypes,
    'form_config'
  ).findOne({ 
    where: { 
      id: id
    },
  });
  return config;
}

// Search for the relative form...
 async function getIdForm_(id_form, sequelize){
  const form = await BuildForm(
    sequelize,
    Sequelize.DataTypes,
    'forms'
  ).findOne({ 
    where: { 
      id: id_form
    },
  },
 
  );
  return form;
}

// funcion wich validates the request body
async function validateInfo(config, req, res) {
 // Checks the word count if it's more or less the set in the config
  // By now this is validating using the same field as 'TEXTO'
  let qtdPalavras = helpers.countWords(req.body.opcao);
  if(config.texto_palavras_min !== null && config.texto_palavras_min > qtdPalavras){
    res.status(400).send(`The amount of words is less then needed: '${config.texto_palavras_min}'`);
  }else if(config.texto_palavras_max !== null && config.texto_palavras_max < qtdPalavras){
    res.status(400).send(`The amount of words is more then needed: '${config.texto_palavras_max}'`);
  }

  // Next - Limit the info that can be added to the amount of "qtd_lista_suspensa" set int the table 'FORMS'

}

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    // Now we have the form ID... But still missing it's configurations
    const form = await getIdForm_(req.body.id_form, sequelize);
    // After calling getFormConfig we got the configuration
    const config = await getFormConfig_(form.id_form_config, sequelize);

    await validateInfo(config, req, res);

    try {
      await BuildFormInfo(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        // ID auto generated
        // Validates the the column 'opcao = texto', according to it's configuration.
        opcao: req.body.opcao,
        id_form: req.body.id_form,
      });
      res.status(200).send('Form information was added and associated correctly...');
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
