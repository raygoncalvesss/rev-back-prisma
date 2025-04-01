import prisma from "../../prisma/prisma.js";

// Array para armazenar os animes em memória
// Let animes = [] 

let animes = [
  {
    id: 1,
    title: "Attack on Titan",
    description: "Humanidade lutando contra titãs em um mundo pós-apocalíptico",
    episodes: 75,
    releaseYear: 2013,
    studio: "MAPPA",
    genres: "Ação,Drama,Fantasia",
    rating: 4.8,
    imageUrl: "https://example.com/aot.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "My Hero Academia",
    description:
      "Em um mundo onde quase todos possuem superpoderes, um garoto sem poderes luta para se tornar um herói",
    episodes: 113,
    releaseYear: 2016,
    studio: "Bones",
    genres: "Ação,Comédia,Super-heróis",
    rating: 4.6,
    imageUrl: "https://example.com/mha.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
class AnimeModel {
  // Obter todos os animes
  async findAll() {
  const animes = await prisma.anime.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return animes;
}

  // Obter um anime pelo ID
  async findById(id) {
    const anime = await prisma.anime.findUnique({
      where: {
        id: Number(id),
      },  
    });

    return anime;
  }

  // Criar um novo anime
  async create(
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const newAnime = await prisma.anime.create({
      data: {
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl,
      },
    });

    return newAnime;
  }

  // Atualizar um anime
  async update(
    id,
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const anime = await this.findById(id);

    if (!anime) {
      return null;
    }

    // Atualize o anime existente com os novos dados
    const data = {};
    if (title !== underfined) {
      data.title = title
    }
    if (description !== underfined) {
      data.description = description
    }
    if (episodes !== underfined) {
      data.episodes = episodes
    }
    if (releaseYear !== underfined) {
      data.releaseYear = releaseYear
    }
    if (studio !== underfined) {
      data.studio = studio
    }
    if (genres !== underfined) {
      data.genres = genres
    }
    if (rating !== underfined) {
      data.rating = rating
    }
    if (imageUrl !== underfined) {
      data.imageUrl = imageUrl
    }
    const animeUpdated = await prisma.anime.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return animeUpdated;
  }

  // Remover um anime
 async delete(id) {
    const anime = await this.findById(id);
    if (!anime) {
      return null;
    }

    await prisma.anime.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new AnimeModel();