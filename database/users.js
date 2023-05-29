const prisma = require("./prisma")

const findUserByEmail = (email) => {
    return prisma.users.findUnique({
        where:{
            email,
        },
    });
};

const saveUser = (user) => {
    return prisma.users.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password,
            BoughtMany:{
                create:{
                    quantity: 1,
                    productsId: 1,
                },
            },
        }
    });
};

const findUserById = (id) => {
    return prisma.users.findUnique({
        where:{
            id,
        },
        select:{
            id: true,
            name: true,
            email: true,
            password: false,
            BoughtMany: {
                select: {
                    quantity: true,
                    product: true,
                },
            },
        },
    });
};

module.exports = {
    saveUser,
    findUserByEmail,
    findUserById,
}