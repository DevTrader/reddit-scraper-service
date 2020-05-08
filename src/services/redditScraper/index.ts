import puppeteer from 'puppeteer';

interface ServiceOptions {
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

  public collect() {}

  public watch() {}

  public scrape() {
    // Visit page
    if(this.scrapeMode === 'collect'){

    }else if(this.scrapeMode === 'watch')else{
        // Throw exception: `scrapeMode Not Recognized: ${this.scrapeMode}`
    }
    // decide to call watch() or collect()
    //
  }
}
