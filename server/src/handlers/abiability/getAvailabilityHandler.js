let getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController")
const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")
const getPlaceByIdController = require("../../controllers/getPlaces/getPlaceByIdController")
const getAvailabilityController = require("../../controllers/availability/getAvailability")

let getAvailability = async (req, res)=>{
    let {id, dateInit, dateFinish, guests, location} = req.body
    try {
        let resultDate = getPlacesByDateController(dateInit, dateFinish)
        let resultGuests = getPlacesByGuestsController(location, guests)
        let resultId = getPlaceByIdController(id)

        let result = await getAvailabilityController(id, dateInit, dateFinish, guests)
         res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}