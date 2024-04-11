
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const roomDetails= {
 
  
    createRoom: async ({hotel_id, category_id, pricePerDay, services}) => {
        return await prisma.room.create({
        data: {
            hotel_id,
            category_id,
            pricePerDay,
            services: {
                create: services.map(service => ({
                    name: service.name,
                    description: service.description
                }))
            }
        }
    }); 
    },

    getroomById: async (roomId)=>{
        return prisma.room.findUnique({
            where: {
                id: Number(roomId)
            }
        });
        
    },

    updateRoom: async(roomId,data)=>{
        return  prisma.room.update({
            where: {
                id: Number(roomId)
            },
            data
        })
    },

    deleteRoomById: async(roomId)=>{
        return prisma.room.delete({
            where:{
                id: Number(roomId)
            }
        })
    }
    
    




    

};

module.exports = roomDetails;
