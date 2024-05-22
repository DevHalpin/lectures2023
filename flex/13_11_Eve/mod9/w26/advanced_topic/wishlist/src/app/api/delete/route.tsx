import prisma from "../../../../prisma/client";

export async function DELETE(req: Request, res: Response) {
    const response = await req.json();
    const { wishId } = response;

    try {
        await prisma.wishlist.delete({
            where: {
                id: parseInt(wishId)
            }
        });
        return Response.json({message: "Wishlist item deleted successfully"});
    } catch (error) {
        return Response.json({error: `Error deleting wishlist item: ${error}`})
    }
}