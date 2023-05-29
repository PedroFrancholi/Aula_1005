const prisma = require("./prisma");



const getAllProducts = (moreThan) =>{
    return prisma.Products.findMany({
        where:{
            price:{
                gt: moreThan
            }
        }
    })
}

const getProductById = (id) =>{
    return prisma.Products.findFirst({
        where:{
            id
        }
    })
}


const saveProduct = (product) =>{
        return prisma.Products.create({
            data: product
        })

}

const updateProduct = (id,product) =>{
    return prisma.Products.update({
        where:{
            id: id
        },
        data: product
    })
}


const deleteProduct = (id) =>{
    return prisma.Products.delete({
        where:{
            id: id
        }
    })
}

const buyProductByUser = (userId, productId)=>{
    return prisma.boughtBy.create({
        data:{
            userId: userId,
            productId: productId,
            quantity,
        },
    });
};


module.exports = {
    saveProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    buyProductByUser,
}