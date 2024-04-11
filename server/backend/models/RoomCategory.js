const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const roomCategoryDetails = {
    createRoomCategory: async ({ hotel_id, categoryName }) => {
        
            return await prisma.roomCategory.create({
                data: {
                    hotel_id,
                    categoryName,
                }
            });
        
    },

    getRoomCategoryById: async (roomCategoryid) => {
        try {
            return await prisma.roomCategory.findUnique({
                where: {
                    id: Number(roomCategoryid)
                }
            });
        } catch (error) {
            throw new Error('Failed to fetch room category by ID');
        }
    },

    updateRoomCategory: async (roomCategoryid, data) => {
        try {
            return await prisma.roomCategory.update({
                where: {
                    id: Number(roomCategoryid)
                },
                data
            });
        } catch (error) {
            throw new Error('Failed to update room category');
        }
    },

    deleteRoomCategory: async (roomCategoryid) => {
        try {
            await prisma.roomCategory.delete({
                where: {
                    id: Number(roomCategoryid)
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = roomCategoryDetails;
