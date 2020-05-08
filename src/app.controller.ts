import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { RedditScraperService } from './services/redditScraper/index';
import { RedditScraperDTO } from './services/redditScraper/redditScraper.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('subredditScraper')
  async getPosts(@Body() params: RedditScraperDTO): Promise<string> {
    const scraperService = new RedditScraperService(params);
    await scraperService.scrape();
    return 'scraperService';
  }
}
