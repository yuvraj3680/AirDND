const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const serviceDetails = {
    
    createRoom: async ({name, description, room_id}) => {
    
        return prisma.service.create({  
          data: {
            name,
            description,
            room_id
          }
        });
    },

    getServiceById: async(serviceId)=>{
      return prisma.service.findUnique({
        where:{
          id:Number(serviceId)
        }
      })
    },

    updateService: async (serviceId,data)=>{
      return prisma.service.update({
        where:{
          id:Number(serviceId)
        },
        data
      })
      },
      deleteService: async(serviceId)=>{
          return prisma.service.delete({
            where:
            {
              id:Number(serviceId)
            }
          })
      }
    
};



module.exports = serviceDetails;