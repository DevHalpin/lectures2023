import prisma from '../../../../prisma/client'

export async function POST(req: Request, res: Response) {
    const response = await req.json();
    const { id } = response;

    try {
        await prisma.wishlist.delete({
            where: {
                id: parseInt(id)
            }
        });
        return Response.json({message: 'Wishlist item deleted successfully'});
    } catch (error) {
        return Response.json({ error: `An unexpected error occurred: ${error}`});
    }
}