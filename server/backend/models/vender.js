const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const venderDetails = {
    createVender: async ({name, email, location_id}) => {
    
        return prisma.vender.create({  
          data: {
            name,
            email, 
            location_id
          }
        });
    },

    getVenderById: async (venderId)=>{
      return prisma.vender.findUnique({
        where: {
          id:Number(venderId)
        }
      })
    },


    updateVenderById: async (venderId,data)=>{
      return prisma.vender.update({
        where: {
          id:Number(venderId)
        },
        data
      })
    },

    deleteVender: async(venderId)=>{
      return prisma.vender.delete({
        where:{
          id:Number(venderId)
        }
      })
    }
}



module.exports = venderDetails;