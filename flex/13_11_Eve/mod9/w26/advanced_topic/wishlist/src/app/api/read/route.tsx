import prisma from "../../../../prisma/client";

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) {
        return Response.json({error: "userId is required"});
    }

    try {
        const wishlist = await prisma.wishlist.findMany({
            where: {
                userId: parseInt(userId)
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return Response.json({wishlist});
    } catch (error) {
        return Response.json({error: `Error fetching wishlist items: ${error}`})
    }
}

    