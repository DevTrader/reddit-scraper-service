import { RedditScraperService } from './index';
import { Test, TestingModule } from '@nestjs/testing';

describe('RedditScraperService', () => {
  const scraperOptions = {
    subredditUrl: 'https://www.reddit.com/r/funny/',
    scrapeMode: 'collect' as const,
    mediaType: 'images' as const,
  };
  const scraperService = new RedditScraperService(scraperOptions);

  it('Should Be Initialized With Expected Values', () => {
    expect(scraperService.subredditUrl).toBe(scraperOptions.subredditUrl);
    expect(scraperService.scrapeMode).toBe(scraperOptions.scrapeMode);
    expect(scraperService.mediaType).toBe(scraperOptions.mediaType);
    expect(scraperService.videoDuration).toBe(undefined);
  });
});
