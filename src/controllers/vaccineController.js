const Vaccine = require("../models/Vaccine")

const createVaccine = async (req, res) => {
    const { name, expected_date, vaccinated } = req.body
    try {
        const vaccine = await Vaccine.create({ name, expected_date, vaccinated });
        console.log(`Vacina ${vaccine.name} adicionada à lista`);
        res.status(201).send(vaccine)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllVaccine = async (req, res) => {
    const vaccinated = req.query.vaccinated
    try {
        const where = vaccinated ? { where: { vaccinated } } : {}

        const vaccine = await Vaccine.findAll(where)
        if (vaccine && vaccine.length > 0) {
            res.status(200).send(vaccine)
        } else {
            res.status(204).send()
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getByIdVaccine = async (req, res) => {
    const vaccineId = req.params.id
    try {
        const vaccine = await Vaccine.findOne({
            where: {id:vaccineId }
        });
        if (vaccine){
            res.status(200).send(vaccine)
        } else {
            res.status(404).send({message: `A vacina referente ao id: ${vaccineId} não foi encontrada.`})
        }
    } catch (error) {
        res.status(500).send({message: error.message })

    }
}

const updateVaccine = async (req, res) => {
    const vaccineId = req.params.id
    const  vaccinated  = req.body.vaccinated
    try {
        const rowsUpdate = await Vaccine.update ({ vaccinated }, {
            where: {id:vaccineId}
        });
        if (rowsUpdate && rowsUpdate > 0){
            res.status(200).send({message: `A vacina com o id: ${vaccineId} teve a situação de aplicada alterada.`})
        } else {
            res.status(404).send({message: `Não encontramos a vacina com id: ${vaccineId} para atualizá-la.`})
        }
    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

const deleteVaccine = async (req, res) => {
    const vaccineId = req.params.id
    try{
        const rowsDelete = await Vaccine.destroy ({where: {id: vaccineId } });
        if (rowsDelete) {
            res.status(200).send({message: `${rowsDelete} vacina(s) deletada(s).`})
        } else {
            res.status(404).send({message: `Não foi possível deletar a vacina com id: ${vaccineId}.`})
        }
    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

module.exports = {
    createVaccine,
    getAllVaccine,
    getByIdVaccine,
    updateVaccine,
    deleteVaccine
}