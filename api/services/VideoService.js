const database = require('../models');
const moment = require('moment');
const uuid = require('uuid');

class VideoService {
  async cadastrarVideo(dto) {
    try {
      if(!dto.titulo) {
        throw new Error('O título do filme é obrigatório');
      };
      if(!dto.descricao) {
        throw new Error('A descrição do filme é obrigatória');
      };
      if(!dto.url) {
        throw new Error("A url do filme é obrigatória");
      };

      const id = uuid.v4();

      const novoVideo = await database.Video.create({
        id: id,
        titulo: dto.titulo,
        descricao: dto.descricao,
        url: dto.url
      });
      return novoVideo;

    } catch (error) {
      throw new Error(error.message);
    };
  };
  async pegarTodosOsVideos() {
    const videos = await database.Video.findAll();
    return videos;
  };
  async pegarVideoPeloId(id) {
    if(typeof id === 'undefined'){
      throw new Error('ID não pode ser undefined');
    };
    try {
      const video = await database.Video.findOne({
        where: {
          id: id,
        },
      });
      if(!video) {
        throw new Error('Vídeo informado não cadastrado');
      };
      return video
    } catch (error) {
      throw new Error(error.message);
    };
  };
  async delatarVideoPeloId(id) {
    await this.pegarVideoPeloId(id);
    try {
    await database.Video.destroy({
      where: {
        id: id,
      },
    });  
    return { message: 'Vídeo excluido' };
    } catch (error) {
      throw new Error('Erro ao tentar deletar o vídeo');
    };
  };
  async editarVideoPeloId(dto) {
    const video = await database.Video.findOne({
      where: {
        id: dto.id;
      };
    });
    if(!video) {
      throw new Error('Vídeo informado não cadastrado');
    };
    try {
      
      video.titulo = dto.titulo;
      video.descricao = dto.descricao;
      video.url = dto.url;

      await video.save();

      return video.reload();
    } catch (error) {
      throw new Error('Erro ao atualizar vídeo');
    }
  };
};

module.exports = VideoService;