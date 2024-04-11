const { PrismaClient}= require("@prisma/client");
const prisma= new PrismaClient();

const UserDetails = {
    createUser: async ({ username, mobile, email, password }) => {
        
        return prisma.UserDetails.create({
            data: {
                username: username,
                mobile: mobile,
                email: email,
                password: password
            }
        });
    },

    getAllUser: async () => {
        return prisma.userDetails.findMany();
    },
    readUserByEmail: async (user_email) => {
        try {
            const userInfo = await prisma.userDetails.findFirst({
                where: {
                    email: user_email
                }
            });
            return userInfo;
        } catch (error) {
            console.error("Error in readUserByEmail:", error);
            throw error;
        }
    },
    updateUserById:async(user_Id,data)=>{
        return await prisma.userDetails.update({
            where:{
                id:user_Id
            },
            data
        });
    },
    deleteUserById:async(user_Id)=>{
        return await prisma.userDetails.delete({
            where:{
                id:user_Id
            }
        });
    }
    
};

module.exports=UserDetails;