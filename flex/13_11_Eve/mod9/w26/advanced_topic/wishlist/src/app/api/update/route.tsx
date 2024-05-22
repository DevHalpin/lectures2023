import prisma from "../../../../prisma/client";

export async function POST(req: Request, res: Response) {
    const response = await req.json();
    const { title, link, wishId } = response;

    try {
        const wishlist = await prisma.wishlist.update({
            where: {
                id: parseInt(wishId)
            },
            data: {
                title,
                link
            }
        });
        return Response.json({wishlist});
    } catch (error) {
        return Response.json({error: `Error creating wishlist item: ${error}`})
    }
}