import prisma from "../../lib/prisma"

export default async function  handler (req, res) {
  if (req.method == "POST") {



    const mountainData = JSON.parse(req.body);
    
    const savedMountains = await prisma.mountain.create({
      data: mountainData,
    });
    res.json(savedMountains)  
  }
}
