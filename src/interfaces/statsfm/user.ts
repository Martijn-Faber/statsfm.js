import { TopObject } from './top';

export enum OrderBySetting {
  'PLATFORM',
  'COUNT',
  'TIME'
}

export interface UserImport {
  hash: string;
  id: number;
  userId: string;
  path: string;
  count: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  serverId: number;
  error: string | null;
  name: string | null;
}

export interface UserSpotifyPlaylist {
  id: number;
  userId: string;
  createdAt: Date;
  syncedAt: Date;
  size: number;
  spotifyId: string;
  range?: Range;
  rangeInDays?: number;
  error?: string;
  syncEnabled: boolean;
  name?: string;
  orderBy?: OrderBySetting;
}

export interface SocialMediaPlatform {
  name: string;
  icon: string;
}

export interface UserSocialMediaConnection {
  id: number;
  verified: boolean;
  platformUserId: string;
  platformUsername: string;
  platformUserImage: string;
  platform: SocialMediaPlatform;
}

export interface UserPrivacySettings {
  profile: boolean;
  currentlyPlaying: boolean;
  recentlyPlayed: boolean;
  topTracks: boolean;
  topArtists: boolean;
  topAlbums: boolean;
  topGenres: boolean;
  streams: boolean;
  streamStats: boolean;
}

export interface UserProfile {
  bio: string;
  pronouns?: string;
}

export interface UserPublic {
  id: string;
  customId: string;
  displayName: string;
  image: string;
  isPlus: boolean;
  hasImported: boolean;
  syncEnabled: boolean;
  orderBy: OrderBySetting;
  privacySettings?: UserPrivacySettings;
  profile?: UserProfile;
}

export interface UserPrivate extends UserPublic {
  email: string;
  country: string;
}

export interface TopUser extends TopObject {
  user: UserPublic;
}
