import * as puppeteer from 'puppeteer';

export interface ServiceOptions {
  subredditUrl: string;
  scrapeMode: 'watch' | 'collect';
  mediaType: 'videos' | 'images';
  videoDuration?: number; // in minutes
}

export class RedditScraperService {
  public subredditUrl;
  public scrapeMode;
  public mediaType;
  public videoDuration;
  public constructor({
    subredditUrl,
    scrapeMode,
    mediaType,
    videoDuration,
  }: ServiceOptions) {
    this.subredditUrl = subredditUrl;
    this.scrapeMode = scrapeMode;
    this.mediaType = mediaType;
    this.videoDuration = videoDuration;
  }

  private getMediaType(postUrl: string): 'video' | 'image' {
    // if the media is a video or image
    return 'video';
  }

  public async collect(page) {
    await page.goto(this.subredditUrl + '/top/?t=all');
  }

  public async watch() {}

  public async scrape() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Visit page
    if (this.scrapeMode === 'collect') {
      await this.collect(page);
    } else if (this.scrapeMode === 'watch') {
      this.watch();
    } else {
      // Throw exception: `scrapeMode Not Recognized: ${this.scrapeMode}`
    }
    // decide to call watch() or collect()
    //
  }
}
