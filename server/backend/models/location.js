const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const locationDetails = 
{
    createLocation: async ({name, city, country}) => {
    
        return prisma.location.create({  
          data: {
            name, 
            city, 
            country
          }
        });
      },


      getLocationById: async (location_id) => {
        return prisma.location.findUnique({
            where: {
                  id:Number(location_id)
            }
                  
        });
    },

    getAllLocation: async () => {
      return prisma.location.findMany();
  },

    updateLocation: async (location_id, data) => {
        return prisma.location.update({
            where: { 
                  id:Number(location_id)
                 },
            data
        });
    },

    deleteLocation: async (location_id) => {
        return prisma.location.delete({
            where: { 
              id: Number(location_id) 
            }
        });
    }
}



module.exports = locationDetails;