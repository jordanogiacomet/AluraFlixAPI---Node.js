const VideoService = require('../../services/VideoService.js');
const videoService = new VideoService();
const { describe, expect } = require('@jest/globals');
const database = require('../../models/index.js');
const moment = require('moment');

describe('VideoService', () => {
  it('should register title, description and url', async () => {
    
    const videoMock = {
      titulo: "Harry Potter",
      descricao: "Harry Potter",
    };
    const videoSalvo = videoService.cadastrarVideo(videoMock);

    await expect(videoSalvo)
      .rejects
      .toThrowError('A url do filme é obrigatória');
  });
  it('should validate the return of the informations of the videos', async () => {
    
    const videoMock = {
      titulo: "Harry Potter",
      descricao: "Harry Potter",
      url: "teste.com.br"
    };

    const videoSalvo = await videoService.cadastrarVideo(videoMock);
    const retornado = await videoService.pegarVideoPeloId(videoSalvo.id);

    expect(retornado).toEqual(
      
      expect.objectContaining({
        id: expect.stringMatching(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i),
        titulo: videoMock.titulo,
        descricao: videoMock.descricao,
        url: videoMock.url,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    );

    await videoService.delatarVideoPeloId(videoSalvo.id);
  });
  
  /*
  it('should return all the videos', async () => {
    
    await database.Video.bulkCreate([
      { titulo: 'Harry Potter 1', descricao: 'Harry Potter 1', url: 'teste.com.br' },
      { titulo: 'Harry Potter 2', descricao: 'Harry Potter 2', url: 'teste.com.br' },
      { titulo: 'Harry Potter 3', descricao: 'Harry Potter 3', url: 'teste.com.br' },
    ]);
    
    const videos = await videoService.pegarTodosOsVideos();
    
    expect(videos.length).toBe(3); // Corrigido para 'videos' em vez de 'video'
    expect(videos[0].titulo).toBe('Harry Potter 1');
    expect(videos[1].titulo).toBe('Harry Potter 2');
    expect(videos[2].titulo).toBe('Harry Potter 3');
    
    await videoService.pegarVideoPeloId(videos[0].id);
    await videoService.pegarVideoPeloId(videos[1].id);
    await videoService.pegarVideoPeloId(videos[2].id);
  });

  */
});