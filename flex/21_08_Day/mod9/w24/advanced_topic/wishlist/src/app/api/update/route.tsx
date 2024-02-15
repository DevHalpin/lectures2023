import prisma from '../../../../prisma/client'

export async function POST(req: Request, res: Response) {
    const response = await req.json();
    const { wishId, title, link } = response;

    try {
        const updatedWish = await prisma.wishlist.update({
            where: {
                id: parseInt(wishId)
            },
            data: {
                title, link
            }
        });
        return Response.json({updatedWish});
    } catch (error) {
        return Response.json({ error: `An unexpected error occurred: ${error}`});
    }
}