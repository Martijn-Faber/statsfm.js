import { AlbumSimple } from './album';
import { ArtistSimple } from './artist';
import { Object } from '.';
import { TopObject } from './top';

export interface Track extends Object {
  name: string;
  explicit: boolean;
  durationMs: number;
  spotifyPopularity: number;
  externalIds: Record<string, unknown> & { spotify?: string[] };
  albums: AlbumSimple[];
  artists: ArtistSimple[];
}
export interface RecentlyPlayedTrack {
  endTime: Date;
  track: Track;
}

export interface CurrentlyPlayingTrack {
  date: Date;
  progressMs: number;
  deviceName?: string;
  track: Track;
}

export interface TopTrack extends TopObject {
  track: Track;
}
