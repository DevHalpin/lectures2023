import prisma from "../../../../prisma/client";

export async function POST(req: Request, res: Response) {
    const response = await req.json();
    const { title, titleLink, userId } = response;

    try {
        const wishlist = await prisma.wishlist.create({
            data: {
                title,
                link: titleLink,
                userId: parseInt(userId)
            }
        });
        return Response.json({wishlist});
    } catch (error) {
        return Response.json({error: `Error creating wishlist item: ${error}`})
    }
}
