const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const hotelDetails = {
  // Create a hotel
  createHotel: async ({ locationId, name, address, checkIn, checkOut, vender_id }) => {
    return prisma.hotel.create({
        data: {
            location: { connect: { id: 1 } }, 
            name,
            address,
            checkIn,
            checkOut,
            vender_id 
        }
    });
  },


  readAllhotels: async(hotelId)=>{
      return prisma.hotel.findMany()
  },

  // Read hotel data

  getHotelByid: async (hotelid) => {
    try {
      return await prisma.hotel.findUnique({
        where: {
          id: Number(hotelid)
        }
      });
    } catch (error) {
      throw error;
    }
  },

  // Update a hotel
  updateHotel: async (hotelid, data) => {
      return prisma.hotel.update({
          where: { id: hotelid },
          data
      });
  },

  // Delete a hotel
  deleteHotel: async (hotelid) => {
      return prisma.hotel.delete({
          where:  {
            id: Number(hotelid)
           }
      });
  }
};

module.exports = hotelDetails;
