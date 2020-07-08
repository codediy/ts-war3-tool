/// <reference path="types.ts" />
import {code, handle, integer, nothing, real,} from "./types";

export interface agent extends handle {
}

export interface event extends agent {
}

export interface player extends agent {
}

export interface widget extends agent {
}

export interface unit extends widget {
}

export interface destructable extends widget {
}

export interface item extends widget {
}

export interface ability extends agent {
}

export interface buff extends ability {

}

export interface force extends agent {

}

export interface group extends agent {

}

export interface trigger extends agent {

}

export interface triggercondition extends agent {

}

export interface triggeraction extends handle {

}

export interface timer extends agent {

}

export interface location extends agent {

}

export interface region extends agent {

}

export interface rect extends agent {

}

export interface boolexpr extends agent {

}

export interface sound extends agent {

}

export interface conditionfuncs extends boolexpr {

}

export interface filterfunc extends boolexpr {

}

export interface unitpool extends handle {

}

export interface itempool extends handle {

}

export interface race extends handle {

}

export interface alliancetype extends handle {

}

export interface racepreference extends handle {

}

export interface gamestate extends handle {

}

export interface igamestate extends gamestate {

}

export interface fgamestate extends gamestate {

}

export interface playerstate extends handle {

}

export interface playerscore extends handle {

}

export interface playergameresult extends handle {

}

export interface unitstate extends handle {

}

export interface aidifficulty extends handle {

}

export interface eventid extends handle {

}

export interface gameevent extends eventid {

}

export interface playerevent extends eventid {

}

export interface playerunitevent extends eventid {

}

export interface unitevent extends eventid {

}

export interface limitop extends eventid {

}

export interface widgetevent extends eventid {

}

export interface dialogevent extends eventid {

}

export interface unittype extends handle {

}

export interface gamespeed extends handle {

}

export interface gamedifficulty extends handle {

}

export interface gametype extends handle {

}

export interface mapflag extends handle {

}

export interface mapvisibility extends handle {

}

export interface mapsetting extends handle {

}

export interface mapdensity extends handle {

}

export interface mapcontrol extends handle {

}

export interface playerslotstate extends handle {

}

export interface volumegroup extends handle {

}

export interface camerafield extends handle {

}

export interface camerasetup extends handle {

}

export interface playercolor extends handle {

}

export interface placement extends handle {

}

export interface startlocprio extends handle {

}

export interface raritycontrol extends handle {

}

export interface blendmode extends handle {

}

export interface texmapflags extends handle {

}

export interface effect extends agent {

}

export interface effectype extends handle {

}

export interface weathereffect extends handle {

}

export interface terraindeformation extends handle {

}

export interface fogstate extends handle {

}

export interface fogmodifier extends agent {

}

export interface dialog extends agent {

}

export interface button extends agent {

}

export interface quest extends agent {

}

export interface questitem extends agent {

}

export interface defeatcondition extends agent {

}

export interface timerdialog extends agent {

}

export interface leaderboard extends agent {

}

export interface multiboard extends agent {

}

export interface multiboarditem extends agent {

}

export interface trackable extends agent {

}

export interface gamecache extends agent {

}

export interface version extends handle {

}

export interface itemtype extends handle {

}

export interface texttag extends handle {

}

export interface attacktype extends handle {

}

export interface damagetype extends handle {

}

export interface weapontype extends handle {

}

export interface soundtype extends handle {

}

export interface lightning extends handle {

}

export interface pathingtype extends handle {

}

export interface image extends handle {

}

export interface ubersplat extends handle {

}

export interface hashtable extends agent {

}

export declare function Jass_Constant_Native___ConvertRace(i: integer): race

export declare function Jass_Constant_Native___ConvertAllianceType(i: integer): alliancetype;

export declare function Jass_Constant_Native___ConvertRacePref(i: integer): racepreference;

export declare function Jass_Constant_Native___ConvertIGameState(i: integer): igamestate;

export declare function Jass_Constant_Native___ConvertFGameState(i: integer): fgamestate;

export declare function Jass_Constant_Native___ConvertPlayerState(i: integer): playerstate;

export declare function Jass_Constant_Native___ConvertPlayerScore(i: integer): playerscore;

export declare function Jass_Constant_Native___ConvertPlayerGameResult(i: integer): playergameresult;

export declare function Jass_Constant_Native___ConvertUnitState(i: integer): unitstate;

export declare function Jass_Constant_Native___ConvertAIDifficulty(i: integer): aidifficulty;

export declare function Jass_Constant_Native___ConvertGameEvent(i: integer): gameevent;

export declare function Jass_Constant_Native___ConvertPlayerEvent(i: integer): playerevent;

export declare function Jass_Constant_Native___ConvertPlayerUnitEvent(i: integer): playerunitevent;

export declare function Jass_Constant_Native___ConvertWidgetEvent(i: integer): widgetevent;

export declare function Jass_Constant_Native___ConvertDialogEvent(i: integer): dialogevent;

export declare function Jass_Constant_Native___ConvertUnitEvent(i: integer): unitevent;

export declare function Jass_Constant_Native___ConvertLimitOp(i: integer): limitop;

export declare function Jass_Constant_Native___ConvertUnitType(i: integer): unittype;

export declare function Jass_Constant_Native___ConvertGameSpeed(i: integer): gamespeed;

export declare function Jass_Constant_Native___ConvertPlacement(i: integer): placement;

export declare function Jass_Constant_Native___ConvertStartLocPrio(i: integer): startlocprio;

export declare function Jass_Constant_Native___ConvertGameDifficulty(i: integer): gamedifficulty;

export declare function Jass_Constant_Native___ConvertGameType(i: integer): gametype;

export declare function Jass_Constant_Native___ConvertMapFlag(i: integer): mapflag;

export declare function Jass_Constant_Native___ConvertMapVisibility(i: integer): mapvisibility;

export declare function Jass_Constant_Native___ConvertMapSetting(i: integer): mapsetting;

export declare function Jass_Constant_Native___ConvertMapDensity(i: integer): mapdensity;

export declare function Jass_Constant_Native___ConvertMapControl(i: integer): mapcontrol;

export declare function Jass_Constant_Native___ConvertPlayerColor(i: integer): playercolor;

export declare function Jass_Constant_Native___ConvertPlayerSlotState(i: integer): playerslotstate;

export declare function Jass_Constant_Native___ConvertVolumeGroup(i: integer): volumegroup;

export declare function Jass_Constant_Native___ConvertCameraField(i: integer): camerafield;

export declare function Jass_Constant_Native___ConvertBlendMode(i: integer): blendmode;

export declare function Jass_Constant_Native___ConvertRarityControl(i: integer): raritycontrol;

export declare function Jass_Constant_Native___ConvertTexMapFlags(i: integer): texmapflags;

export declare function Jass_Constant_Native___ConvertFogState(i: integer): fogstate;

export declare function Jass_Constant_Native___ConvertEffectType(i: integer): effectype;

export declare function Jass_Constant_Native___ConvertVersion(i: integer): version;

export declare function Jass_Constant_Native___ConvertItemType(i: integer): itemtype;

export declare function Jass_Constant_Native___ConvertAttackType(i: integer): attacktype;

export declare function Jass_Constant_Native___ConvertDamageType(i: integer): damagetype;

export declare function Jass_Constant_Native___ConvertWeaponType(i: integer): weapontype;

export declare function Jass_Constant_Native___ConvertSoundType(i: integer): soundtype;

export declare function Jass_Constant_Native___ConvertPathingType(i: integer): pathingtype;

export declare function Jass_Constant_Native___OrderId(orderIdString: string): integer;

export declare function Jass_Constant_Native___OrderId2String(orderId: integer): string;

export declare function Jass_Constant_Native___UnitId(unitIdString: string): integer;

export declare function Jass_Constant_Native___UnitId2String(unitId: integer): string;

export declare function Jass_Constant_Native___AbilityId(abilityIdString: string): integer;

export declare function Jass_Constant_Native___AbilityId2String(abilityId: integer): string;

export declare function Jass_Constant_Native___GetObjectName(objectId: integer): string;


export const FALSE = false;
export const TRUE = true;
export const JASS_MAX_ARRAY_SIZE = 8192;
export const PLAYER_NEUTRAL_PASSIVE = 15;
export const PLAYER_NEUTRAL_AGGRESSIVE = 12;

/*PlayerColor*/
export const PLAYER_COLOR_RED = Jass_Constant_Native___ConvertPlayerColor(0);
export const PLAYER_COLOR_BLUE = Jass_Constant_Native___ConvertPlayerColor(1);
export const PLAYER_COLOR_CYAN = Jass_Constant_Native___ConvertPlayerColor(2);
export const PLAYER_COLOR_PURPLE = Jass_Constant_Native___ConvertPlayerColor(3);
export const PLAYER_COLOR_YELLOW = Jass_Constant_Native___ConvertPlayerColor(4);
export const PLAYER_COLOR_ORANGE = Jass_Constant_Native___ConvertPlayerColor(5);
export const PLAYER_COLOR_GREEN = Jass_Constant_Native___ConvertPlayerColor(6);
export const PLAYER_COLOR_PINK = Jass_Constant_Native___ConvertPlayerColor(7);
export const PLAYER_COLOR_LIGHT_GRAY = Jass_Constant_Native___ConvertPlayerColor(8);
export const PLAYER_COLOR_LIGHT_BLUE = Jass_Constant_Native___ConvertPlayerColor(9);
export const PLAYER_COLOR_AQUA = Jass_Constant_Native___ConvertPlayerColor(10);
export const PLAYER_COLOR_BROWN = Jass_Constant_Native___ConvertPlayerColor(11);

/*Race*/
export const RACE_HUMAN = Jass_Constant_Native___ConvertRace(1);
export const RACE_ORC = Jass_Constant_Native___ConvertRace(2);
export const RACE_UNDEAD = Jass_Constant_Native___ConvertRace(3);
export const RACE_NIGHTELF = Jass_Constant_Native___ConvertRace(4);
export const RACE_DEMON = Jass_Constant_Native___ConvertRace(5);
export const RACE_OTHER = Jass_Constant_Native___ConvertRace(7);

/*GameResult*/
export const PLAYER_GAME_RESULT_VICTORY = Jass_Constant_Native___ConvertPlayerGameResult(0);
export const PLAYER_GAME_RESULT_DEFEAT = Jass_Constant_Native___ConvertPlayerGameResult(1);
export const PLAYER_GAME_RESULT_TIE = Jass_Constant_Native___ConvertPlayerGameResult(2);
export const PLAYER_GAME_RESULT_NEUTRAL = Jass_Constant_Native___ConvertPlayerGameResult(3);

export const ALLIANCE_PASSIVE = Jass_Constant_Native___ConvertAllianceType(0);
export const ALLIANCE_HELP_REQUEST = Jass_Constant_Native___ConvertAllianceType(1);
export const ALLIANCE_HELP_RESPONSE = Jass_Constant_Native___ConvertAllianceType(2);
export const ALLIANCE_SHARED_XP = Jass_Constant_Native___ConvertAllianceType(3);
export const ALLIANCE_SHARED_SPELLS = Jass_Constant_Native___ConvertAllianceType(4);
export const ALLIANCE_SHARED_VISION = Jass_Constant_Native___ConvertAllianceType(5);
export const ALLIANCE_SHARED_CONTROL = Jass_Constant_Native___ConvertAllianceType(6);
export const ALLIANCE_SHARED_ADVANCED_CONTROL = Jass_Constant_Native___ConvertAllianceType(7);
export const ALLIANCE_RESCUABLE = Jass_Constant_Native___ConvertAllianceType(8);
export const ALLIANCE_SHARED_VISION_FORCED = Jass_Constant_Native___ConvertAllianceType(9);


export const VERSION_REIGN_OF_CHAOS = Jass_Constant_Native___ConvertVersion(0);
export const VERSION_FROZEN_THRONE = Jass_Constant_Native___ConvertVersion(1);

export const ATTACK_TYPE_NORMAL = Jass_Constant_Native___ConvertAttackType(0);
export const ATTACK_TYPE_MELEE = Jass_Constant_Native___ConvertAttackType(1);
export const ATTACK_TYPE_PIERCE = Jass_Constant_Native___ConvertAttackType(2);
export const ATTACK_TYPE_SIEGE = Jass_Constant_Native___ConvertAttackType(3);
export const ATTACK_TYPE_MAGIC = Jass_Constant_Native___ConvertAttackType(4);
export const ATTACK_TYPE_CHAOS = Jass_Constant_Native___ConvertAttackType(5);
export const ATTACK_TYPE_HERO = Jass_Constant_Native___ConvertAttackType(6);

export const DAMAGE_TYPE_UNKNOWN = Jass_Constant_Native___ConvertDamageType(0);
export const DAMAGE_TYPE_NORMAL = Jass_Constant_Native___ConvertDamageType(4);
export const DAMAGE_TYPE_ENHANCED = Jass_Constant_Native___ConvertDamageType(5);
export const DAMAGE_TYPE_FIRE = Jass_Constant_Native___ConvertDamageType(8);
export const DAMAGE_TYPE_COLD = Jass_Constant_Native___ConvertDamageType(9);
export const DAMAGE_TYPE_LIGHTNING = Jass_Constant_Native___ConvertDamageType(10);
export const DAMAGE_TYPE_POISON = Jass_Constant_Native___ConvertDamageType(11);
export const DAMAGE_TYPE_DISEASE = Jass_Constant_Native___ConvertDamageType(12);
export const DAMAGE_TYPE_DIVINE = Jass_Constant_Native___ConvertDamageType(13);
export const DAMAGE_TYPE_MAGIC = Jass_Constant_Native___ConvertDamageType(14);
export const DAMAGE_TYPE_SONIC = Jass_Constant_Native___ConvertDamageType(15);
export const DAMAGE_TYPE_ACID = Jass_Constant_Native___ConvertDamageType(16);
export const DAMAGE_TYPE_FORCE = Jass_Constant_Native___ConvertDamageType(17);
export const DAMAGE_TYPE_DEATH = Jass_Constant_Native___ConvertDamageType(18);
export const DAMAGE_TYPE_MIND = Jass_Constant_Native___ConvertDamageType(19);
export const DAMAGE_TYPE_PLANT = Jass_Constant_Native___ConvertDamageType(20);
export const DAMAGE_TYPE_DEFENSIVE = Jass_Constant_Native___ConvertDamageType(21);
export const DAMAGE_TYPE_DEMOLITION = Jass_Constant_Native___ConvertDamageType(22);
export const DAMAGE_TYPE_SLOW_POISON = Jass_Constant_Native___ConvertDamageType(23);
export const DAMAGE_TYPE_SPIRIT_LINK = Jass_Constant_Native___ConvertDamageType(24);
export const DAMAGE_TYPE_SHADOW_STRIKE = Jass_Constant_Native___ConvertDamageType(25);
export const DAMAGE_TYPE_UNIVERSAL = Jass_Constant_Native___ConvertDamageType(26);

export const WEAPON_TYPE_WHOKNOWS = Jass_Constant_Native___ConvertWeaponType(0);
export const WEAPON_TYPE_METAL_LIGHT_CHOP = Jass_Constant_Native___ConvertWeaponType(1);
export const WEAPON_TYPE_METAL_MEDIUM_CHOP = Jass_Constant_Native___ConvertWeaponType(2);
export const WEAPON_TYPE_METAL_HEAVY_CHOP = Jass_Constant_Native___ConvertWeaponType(3);
export const WEAPON_TYPE_METAL_LIGHT_SLICE = Jass_Constant_Native___ConvertWeaponType(4);
export const WEAPON_TYPE_METAL_MEDIUM_SLICE = Jass_Constant_Native___ConvertWeaponType(5);
export const WEAPON_TYPE_METAL_HEAVY_SLICE = Jass_Constant_Native___ConvertWeaponType(6);
export const WEAPON_TYPE_METAL_MEDIUM_BASH = Jass_Constant_Native___ConvertWeaponType(7);
export const WEAPON_TYPE_METAL_HEAVY_BASH = Jass_Constant_Native___ConvertWeaponType(8);
export const WEAPON_TYPE_METAL_MEDIUM_STAB = Jass_Constant_Native___ConvertWeaponType(9);
export const WEAPON_TYPE_METAL_HEAVY_STAB = Jass_Constant_Native___ConvertWeaponType(10);
export const WEAPON_TYPE_WOOD_LIGHT_SLICE = Jass_Constant_Native___ConvertWeaponType(11);
export const WEAPON_TYPE_WOOD_MEDIUM_SLICE = Jass_Constant_Native___ConvertWeaponType(12);
export const WEAPON_TYPE_WOOD_HEAVY_SLICE = Jass_Constant_Native___ConvertWeaponType(13);
export const WEAPON_TYPE_WOOD_LIGHT_BASH = Jass_Constant_Native___ConvertWeaponType(14);
export const WEAPON_TYPE_WOOD_MEDIUM_BASH = Jass_Constant_Native___ConvertWeaponType(15);
export const WEAPON_TYPE_WOOD_HEAVY_BASH = Jass_Constant_Native___ConvertWeaponType(16);
export const WEAPON_TYPE_WOOD_LIGHT_STAB = Jass_Constant_Native___ConvertWeaponType(17);
export const WEAPON_TYPE_WOOD_MEDIUM_STAB = Jass_Constant_Native___ConvertWeaponType(18);
export const WEAPON_TYPE_CLAW_LIGHT_SLICE = Jass_Constant_Native___ConvertWeaponType(19);
export const WEAPON_TYPE_CLAW_MEDIUM_SLICE = Jass_Constant_Native___ConvertWeaponType(20);
export const WEAPON_TYPE_CLAW_HEAVY_SLICE = Jass_Constant_Native___ConvertWeaponType(21);
export const WEAPON_TYPE_AXE_MEDIUM_CHOP = Jass_Constant_Native___ConvertWeaponType(22);
export const WEAPON_TYPE_ROCK_HEAVY_BASH = Jass_Constant_Native___ConvertWeaponType(23);


export const PATHING_TYPE_ANY = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_WALKABILITY = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_FLYABILITY = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_BUILDABILITY = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_PEONHARVESTPATHING = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_BLIGHTPATHING = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_FLOATABILITY = Jass_Constant_Native___ConvertPathingType(0);
export const PATHING_TYPE_AMPHIBIOUSPATHING = Jass_Constant_Native___ConvertPathingType(0);


export const RACE_PREF_HUMAN = Jass_Constant_Native___ConvertRacePref(1);
export const RACE_PREF_ORC = Jass_Constant_Native___ConvertRacePref(2);
export const RACE_PREF_NIGHTELF = Jass_Constant_Native___ConvertRacePref(4);
export const RACE_PREF_UNDEAD = Jass_Constant_Native___ConvertRacePref(8);
export const RACE_PREF_DEMON = Jass_Constant_Native___ConvertRacePref(16);
export const RACE_PREF_RANDOM = Jass_Constant_Native___ConvertRacePref(32);
export const RACE_PREF_USER_SELECTABLE = Jass_Constant_Native___ConvertRacePref(64);

export const MAP_CONTROL_USER = Jass_Constant_Native___ConvertMapControl(0);
export const MAP_CONTROL_COMPUTER = Jass_Constant_Native___ConvertMapControl(1);
export const MAP_CONTROL_RESCUABLE = Jass_Constant_Native___ConvertMapControl(2);
export const MAP_CONTROL_NEUTRAL = Jass_Constant_Native___ConvertMapControl(3);
export const MAP_CONTROL_CREEP = Jass_Constant_Native___ConvertMapControl(4);
export const MAP_CONTROL_NONE = Jass_Constant_Native___ConvertMapControl(5);

export const GAME_TYPE_MELEE = Jass_Constant_Native___ConvertGameType(1);
export const GAME_TYPE_FFA = Jass_Constant_Native___ConvertGameType(2);
export const GAME_TYPE_USE_MAP_SETTINGS = Jass_Constant_Native___ConvertGameType(4);
export const GAME_TYPE_BLIZ = Jass_Constant_Native___ConvertGameType(8);
export const GAME_TYPE_ONE_TO_ONE = Jass_Constant_Native___ConvertGameType(16);
export const GAME_TYPE_TWO_TEAM_PLAY = Jass_Constant_Native___ConvertGameType(32);
export const GAME_TYPE_THREE_TEAM_PLAY = Jass_Constant_Native___ConvertGameType(64);
export const GAME_TYPE_FOUR_TEAM_PLAY = Jass_Constant_Native___ConvertGameType(128);

export const MAP_FOG_HIDE_TERRAIN = Jass_Constant_Native___ConvertMapFlag(1);
export const MAP_FOG_MAP_EXPLORED = Jass_Constant_Native___ConvertMapFlag(2);
export const MAP_FOG_ALWAYS_VISIBLE = Jass_Constant_Native___ConvertMapFlag(4);

export const MAP_USE_HANDICAPS = Jass_Constant_Native___ConvertMapFlag(8);
export const MAP_OBSERVERS = Jass_Constant_Native___ConvertMapFlag(16);
export const MAP_OBSERVERS_ON_DEATH = Jass_Constant_Native___ConvertMapFlag(32);
export const MAP_FIXED_COLORS = Jass_Constant_Native___ConvertMapFlag(128);
export const MAP_LOCK_RESOURCE_TRADING = Jass_Constant_Native___ConvertMapFlag(256);
export const MAP_RESOURCE_TRADING_ALLIES_ONLY = Jass_Constant_Native___ConvertMapFlag(512);
export const MAP_LOCK_ALLIANCE_CHANGES = Jass_Constant_Native___ConvertMapFlag(1024);
export const MAP_ALLIANCE_CHANGES_HIDDEN = Jass_Constant_Native___ConvertMapFlag(2048);
export const MAP_CHEATS = Jass_Constant_Native___ConvertMapFlag(4096);
export const MAP_CHEATS_HIDDEN = Jass_Constant_Native___ConvertMapFlag(8192);
export const MAP_LOCK_SPEED = Jass_Constant_Native___ConvertMapFlag(8192 * 2);
export const MAP_LOCK_RANDOM_SEED = Jass_Constant_Native___ConvertMapFlag(8192 * 4);
export const MAP_SHARED_ADVANCED_CONTROL = Jass_Constant_Native___ConvertMapFlag(8192 * 8);
export const MAP_RANDOM_HERO = Jass_Constant_Native___ConvertMapFlag(8192 * 16);
export const MAP_RANDOM_RACES = Jass_Constant_Native___ConvertMapFlag(8192 * 32);
export const MAP_RELOADED = Jass_Constant_Native___ConvertMapFlag(8192 * 64);

export const MAP_PLACEMENT_RANDOM = Jass_Constant_Native___ConvertPlacement(0);
export const MAP_PLACEMENT_FIXED = Jass_Constant_Native___ConvertPlacement(1);
export const MAP_PLACEMENT_USE_MAP_SETTINGS = Jass_Constant_Native___ConvertPlacement(2);
export const MAP_PLACEMENT_TEAMS_TOGETHER = Jass_Constant_Native___ConvertPlacement(3);


export const MAP_LOC_PRIO_LOW = Jass_Constant_Native___ConvertStartLocPrio(0);
export const MAP_LOC_PRIO_HIGH = Jass_Constant_Native___ConvertStartLocPrio(1);
export const MAP_LOC_PRIO_NOT = Jass_Constant_Native___ConvertStartLocPrio(2);

export const MAP_DENSITY_NONE = Jass_Constant_Native___ConvertMapDensity(0);
export const MAP_DENSITY_LIGHT = Jass_Constant_Native___ConvertMapDensity(1);
export const MAP_DENSITY_MEDIUM = Jass_Constant_Native___ConvertMapDensity(2);
export const MAP_DENSITY_HEAVY = Jass_Constant_Native___ConvertMapDensity(3);

export const MAP_DIFFICULTY_EASY = Jass_Constant_Native___ConvertGameDifficulty(0);
export const MAP_DIFFICULTY_NORMAL = Jass_Constant_Native___ConvertGameDifficulty(1);
export const MAP_DIFFICULTY_HARD = Jass_Constant_Native___ConvertGameDifficulty(2);
export const MAP_DIFFICULTY_INSANE = Jass_Constant_Native___ConvertGameDifficulty(3);

export const MAP_SPEED_SLOWEST = Jass_Constant_Native___ConvertGameSpeed(0);
export const MAP_SPEED_SLOW = Jass_Constant_Native___ConvertGameSpeed(1);
export const MAP_SPEED_NORMAL = Jass_Constant_Native___ConvertGameSpeed(2);
export const MAP_SPEED_FAST = Jass_Constant_Native___ConvertGameSpeed(3);
export const MAP_SPEED_FASTEST = Jass_Constant_Native___ConvertGameSpeed(4);

export const PLAYER_SLOT_STATE_EMPTY = Jass_Constant_Native___ConvertPlayerSlotState(0);
export const PLAYER_SLOT_STATE_PLAYING = Jass_Constant_Native___ConvertPlayerSlotState(1);
export const PLAYER_SLOT_STATE_LEFT = Jass_Constant_Native___ConvertPlayerSlotState(2);


export const SOUND_VOLUMEGROUP_UNITMOVEMENT = Jass_Constant_Native___ConvertVolumeGroup(0);
export const SOUND_VOLUMEGROUP_UNITSOUNDS = Jass_Constant_Native___ConvertVolumeGroup(1);
export const SOUND_VOLUMEGROUP_COMBAT = Jass_Constant_Native___ConvertVolumeGroup(2);
export const SOUND_VOLUMEGROUP_SPELLS = Jass_Constant_Native___ConvertVolumeGroup(3);
export const SOUND_VOLUMEGROUP_UI = Jass_Constant_Native___ConvertVolumeGroup(4);
export const SOUND_VOLUMEGROUP_MUSIC = Jass_Constant_Native___ConvertVolumeGroup(5);
export const SOUND_VOLUMEGROUP_AMBIENTSOUNDS = Jass_Constant_Native___ConvertVolumeGroup(6);
export const SOUND_VOLUMEGROUP_FIRE = Jass_Constant_Native___ConvertVolumeGroup(7);

export const GAME_STATE_DIVINE_INTERVENTION = Jass_Constant_Native___ConvertIGameState(0);
export const GAME_STATE_DISCONNECTED = Jass_Constant_Native___ConvertIGameState(1);
export const GAME_STATE_TIME_OF_DAY = Jass_Constant_Native___ConvertIGameState(2);

export const PLAYER_STATE_GAME_RESULT = Jass_Constant_Native___ConvertPlayerState(0);
export const PLAYER_STATE_RESOURCE_GOLD = Jass_Constant_Native___ConvertPlayerState(1);
export const PLAYER_STATE_RESOURCE_LUMBER = Jass_Constant_Native___ConvertPlayerState(2);
export const PLAYER_STATE_RESOURCE_HERO_TOKENS = Jass_Constant_Native___ConvertPlayerState(3);
export const PLAYER_STATE_RESOURCE_FOOD_CAP = Jass_Constant_Native___ConvertPlayerState(4);
export const PLAYER_STATE_RESOURCE_FOOD_USED = Jass_Constant_Native___ConvertPlayerState(5);
export const PLAYER_STATE_FOOD_CAP_CEILING = Jass_Constant_Native___ConvertPlayerState(6);
export const PLAYER_STATE_GIVES_BOUNTY = Jass_Constant_Native___ConvertPlayerState(7);
export const PLAYER_STATE_ALLIED_VICTORY = Jass_Constant_Native___ConvertPlayerState(8);
export const PLAYER_STATE_PLACED = Jass_Constant_Native___ConvertPlayerState(9);
export const PLAYER_STATE_OBSERVER_ON_DEATH = Jass_Constant_Native___ConvertPlayerState(10);
export const PLAYER_STATE_OBSERVER = Jass_Constant_Native___ConvertPlayerState(11);
export const PLAYER_STATE_UNFOLLOWABLE = Jass_Constant_Native___ConvertPlayerState(12);
export const PLAYER_STATE_GOLD_UPKEEP_RATE = Jass_Constant_Native___ConvertPlayerState(13);
export const PLAYER_STATE_LUMBER_UPKEEP_RATE = Jass_Constant_Native___ConvertPlayerState(14);
export const PLAYER_STATE_GOLD_GATHERED = Jass_Constant_Native___ConvertPlayerState(15);
export const PLAYER_STATE_LUMBER_GATHERED = Jass_Constant_Native___ConvertPlayerState(16);
export const PLAYER_STATE_NO_CREEP_SLEEP = Jass_Constant_Native___ConvertPlayerState(25);


export const UNIT_STATE_LIFE = Jass_Constant_Native___ConvertUnitState(0);
export const UNIT_STATE_MAX_LIFE = Jass_Constant_Native___ConvertUnitState(1);
export const UNIT_STATE_MANA = Jass_Constant_Native___ConvertUnitState(2);
export const UNIT_STATE_MAX_MANA = Jass_Constant_Native___ConvertUnitState(3);

export const AI_DIFFICULTY_NEWBIE = Jass_Constant_Native___ConvertAIDifficulty(0);
export const AI_DIFFICULTY_NORMAL = Jass_Constant_Native___ConvertAIDifficulty(1);
export const AI_DIFFICULTY_INSANE = Jass_Constant_Native___ConvertAIDifficulty(2);


export const PLAYER_SCORE_UNITS_TRAINED = Jass_Constant_Native___ConvertPlayerScore(0);
export const PLAYER_SCORE_UNITS_KILLED = Jass_Constant_Native___ConvertPlayerScore(1);
export const PLAYER_SCORE_STRUCT_BUILT = Jass_Constant_Native___ConvertPlayerScore(2);
export const PLAYER_SCORE_STRUCT_RAZED = Jass_Constant_Native___ConvertPlayerScore(3);
export const PLAYER_SCORE_TECH_PERCENT = Jass_Constant_Native___ConvertPlayerScore(4);
export const PLAYER_SCORE_FOOD_MAXPROD = Jass_Constant_Native___ConvertPlayerScore(5);
export const PLAYER_SCORE_FOOD_MAXUSED = Jass_Constant_Native___ConvertPlayerScore(6);
export const PLAYER_SCORE_HEROES_KILLED = Jass_Constant_Native___ConvertPlayerScore(7);
export const PLAYER_SCORE_ITEMS_GAINED = Jass_Constant_Native___ConvertPlayerScore(8);
export const PLAYER_SCORE_MERCS_HIRED = Jass_Constant_Native___ConvertPlayerScore(9);
export const PLAYER_SCORE_GOLD_MINED_TOTAL = Jass_Constant_Native___ConvertPlayerScore(10);
export const PLAYER_SCORE_GOLD_MINED_UPKEEP = Jass_Constant_Native___ConvertPlayerScore(11);
export const PLAYER_SCORE_GOLD_LOST_UPKEEP = Jass_Constant_Native___ConvertPlayerScore(12);
export const PLAYER_SCORE_GOLD_LOST_TAX = Jass_Constant_Native___ConvertPlayerScore(13);
export const PLAYER_SCORE_GOLD_GIVEN = Jass_Constant_Native___ConvertPlayerScore(14);
export const PLAYER_SCORE_GOLD_RECEIVED = Jass_Constant_Native___ConvertPlayerScore(15);
export const PLAYER_SCORE_LUMBER_TOTAL = Jass_Constant_Native___ConvertPlayerScore(16);
export const PLAYER_SCORE_LUMBER_LOST_UPKEEP = Jass_Constant_Native___ConvertPlayerScore(17);
export const PLAYER_SCORE_LUMBER_LOST_TAX = Jass_Constant_Native___ConvertPlayerScore(18);
export const PLAYER_SCORE_LUMBER_GIVEN = Jass_Constant_Native___ConvertPlayerScore(19);
export const PLAYER_SCORE_LUMBER_RECEIVED = Jass_Constant_Native___ConvertPlayerScore(20);
export const PLAYER_SCORE_UNIT_TOTAL = Jass_Constant_Native___ConvertPlayerScore(21);
export const PLAYER_SCORE_HERO_TOTAL = Jass_Constant_Native___ConvertPlayerScore(22);
export const PLAYER_SCORE_RESOURCE_TOTAL = Jass_Constant_Native___ConvertPlayerScore(23);
export const PLAYER_SCORE_TOTAL = Jass_Constant_Native___ConvertPlayerScore(24);


/*Events*/

export const EVENT_GAME_VICTORY = Jass_Constant_Native___ConvertGameEvent(0);
export const EVENT_GAME_END_LEVEL = Jass_Constant_Native___ConvertGameEvent(1);
export const EVENT_GAME_VARIABLE_LIMIT = Jass_Constant_Native___ConvertGameEvent(2);
export const EVENT_GAME_STATE_LIMIT = Jass_Constant_Native___ConvertGameEvent(3);
export const EVENT_GAME_TIMER_EXPIRED = Jass_Constant_Native___ConvertGameEvent(4);
export const EVENT_GAME_ENTER_REGION = Jass_Constant_Native___ConvertGameEvent(5);
export const EVENT_GAME_LEAVE_REGION = Jass_Constant_Native___ConvertGameEvent(6);
export const EVENT_GAME_TRACKABLE_HIT = Jass_Constant_Native___ConvertGameEvent(7);
export const EVENT_GAME_TRACKABLE_TRACK = Jass_Constant_Native___ConvertGameEvent(8);
export const EVENT_GAME_SHOW_SKILL = Jass_Constant_Native___ConvertGameEvent(9);
export const EVENT_GAME_BUILD_SUBMENU = Jass_Constant_Native___ConvertGameEvent(10);


export const EVENT_PLAYER_STATE_LIMIT = Jass_Constant_Native___ConvertPlayerEvent(11);
export const EVENT_PLAYER_ALLIANCE_CHANGED = Jass_Constant_Native___ConvertPlayerEvent(12);
export const EVENT_PLAYER_DEFEAT = Jass_Constant_Native___ConvertPlayerEvent(13);
export const EVENT_PLAYER_VICTORY = Jass_Constant_Native___ConvertPlayerEvent(14);
export const EVENT_PLAYER_LEAVE = Jass_Constant_Native___ConvertPlayerEvent(15);
export const EVENT_PLAYER_CHAT = Jass_Constant_Native___ConvertPlayerEvent(16);
export const EVENT_PLAYER_END_CINEMATIC = Jass_Constant_Native___ConvertPlayerEvent(17);

export const EVENT_PLAYER_UNIT_ATTACKED = Jass_Constant_Native___ConvertUnitEvent(18);
export const EVENT_PLAYER_UNIT_RESCUED = Jass_Constant_Native___ConvertUnitEvent(19);
export const EVENT_PLAYER_UNIT_DEATH = Jass_Constant_Native___ConvertUnitEvent(20);
export const EVENT_PLAYER_UNIT_DECAY = Jass_Constant_Native___ConvertUnitEvent(21);
export const EVENT_PLAYER_UNIT_DETECTED = Jass_Constant_Native___ConvertUnitEvent(22);
export const EVENT_PLAYER_UNIT_HIDDEN = Jass_Constant_Native___ConvertUnitEvent(23);
export const EVENT_PLAYER_UNIT_SELECTED = Jass_Constant_Native___ConvertUnitEvent(24);
export const EVENT_PLAYER_UNIT_DESELECTED = Jass_Constant_Native___ConvertUnitEvent(25);
export const EVENT_PLAYER_UNIT_CONSTRUCT_STATR = Jass_Constant_Native___ConvertUnitEvent(26);
export const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native___ConvertUnitEvent(27);
export const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native___ConvertUnitEvent(28);
export const EVENT_PLAYER_UNIT_UPGRADE_START = Jass_Constant_Native___ConvertUnitEvent(29);
export const EVENT_PLAYER_UNIT_UPGRADE_CANCEL = Jass_Constant_Native___ConvertUnitEvent(30);
export const EVENT_PLAYER_UNIT_UPGRADE_FINISH = Jass_Constant_Native___ConvertUnitEvent(31);
export const EVENT_PLAYER_UNIT_TRAIN_START = Jass_Constant_Native___ConvertUnitEvent(32);
export const EVENT_PLAYER_UNIT_TRAIN_CANCEL = Jass_Constant_Native___ConvertUnitEvent(33);
export const EVENT_PLAYER_UNIT_TRAIN_FINISH = Jass_Constant_Native___ConvertUnitEvent(34);
export const EVENT_PLAYER_UNIT_RESEARCH_START = Jass_Constant_Native___ConvertUnitEvent(35);
export const EVENT_PLAYER_UNIT_RESEARCH_CANCEL = Jass_Constant_Native___ConvertUnitEvent(36);
export const EVENT_PLAYER_UNIT_RESEARCH_FINISH = Jass_Constant_Native___ConvertUnitEvent(37);
export const EVENT_PLAYER_UNIT_ISSUED_ORDER = Jass_Constant_Native___ConvertUnitEvent(38);
export const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native___ConvertUnitEvent(39);
export const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native___ConvertUnitEvent(40);
export const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = Jass_Constant_Native___ConvertUnitEvent(40);
export const EVENT_PLAYER_HERO_LEVEL = Jass_Constant_Native___ConvertUnitEvent(41);
export const EVENT_PLAYER_HERO_SKILL = Jass_Constant_Native___ConvertUnitEvent(42);
export const EVENT_PLAYER_HERO_REVIVABLE = Jass_Constant_Native___ConvertUnitEvent(43);
export const EVENT_PLAYER_HERO_REVIVE_START = Jass_Constant_Native___ConvertUnitEvent(44);
export const EVENT_PLAYER_HERO_REVIVE_CANCEL = Jass_Constant_Native___ConvertUnitEvent(45);
export const EVENT_PLAYER_HERO_REVIVE_FINISH = Jass_Constant_Native___ConvertUnitEvent(46);
export const EVENT_PLAYER_UNIT_SUMMON = Jass_Constant_Native___ConvertUnitEvent(47);
export const EVENT_PLAYER_UNIT_DROP_ITEM = Jass_Constant_Native___ConvertUnitEvent(48);
export const EVENT_PLAYER_UNIT_PICKUP_ITEM = Jass_Constant_Native___ConvertUnitEvent(49);
export const EVENT_PLAYER_UNIT_USE_ITEM = Jass_Constant_Native___ConvertUnitEvent(50);
export const EVENT_PLAYER_UNIT_LOADED = Jass_Constant_Native___ConvertUnitEvent(51);

export const EVENT_UNIT_DAMAGED = Jass_Constant_Native___ConvertUnitEvent(52);
export const EVENT_UNIT_DEATH = Jass_Constant_Native___ConvertUnitEvent(53);
export const EVENT_UNIT_DECAY = Jass_Constant_Native___ConvertUnitEvent(54);
export const EVENT_UNIT_DETECTED = Jass_Constant_Native___ConvertUnitEvent(55);
export const EVENT_UNIT_HIDDEN = Jass_Constant_Native___ConvertUnitEvent(56);
export const EVENT_UNIT_SELECTED = Jass_Constant_Native___ConvertUnitEvent(57);
export const EVENT_UNIT_DESELECTED = Jass_Constant_Native___ConvertUnitEvent(58);
export const EVENT_UNIT_STATE_LIMIT = Jass_Constant_Native___ConvertUnitEvent(59);
export const EVENT_UNIT_ACQUIRED_TARGET = Jass_Constant_Native___ConvertUnitEvent(60);
export const EVENT_UNIT_TARGET_IN_RANGE = Jass_Constant_Native___ConvertUnitEvent(61);
export const EVENT_UNIT_ATTACKED = Jass_Constant_Native___ConvertUnitEvent(62);
export const EVENT_UNIT_RESCUED = Jass_Constant_Native___ConvertUnitEvent(63);
export const EVENT_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native___ConvertUnitEvent(64);
export const EVENT_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native___ConvertUnitEvent(65);
export const EVENT_UNIT_UPGRADE_START = Jass_Constant_Native___ConvertUnitEvent(66);
export const EVENT_UNIT_UPGRADE_CANCEL = Jass_Constant_Native___ConvertUnitEvent(67);
export const EVENT_UNIT_UPGRADE_FINISH = Jass_Constant_Native___ConvertUnitEvent(68);
export const EVENT_UNIT_TRAIN_START = Jass_Constant_Native___ConvertUnitEvent(69);
export const EVENT_UNIT_TRAIN_CANCEL = Jass_Constant_Native___ConvertUnitEvent(70);
export const EVENT_UNIT_TRAIN_FINISH = Jass_Constant_Native___ConvertUnitEvent(71);
export const EVENT_UNIT_RESEARCH_START = Jass_Constant_Native___ConvertUnitEvent(72);
export const EVENT_UNIT_RESEARCH_CANCEL = Jass_Constant_Native___ConvertUnitEvent(73);
export const EVENT_UNIT_RESEARCH_FINISH = Jass_Constant_Native___ConvertUnitEvent(74);
export const EVENT_UNIT_ISSUED_ORDER = Jass_Constant_Native___ConvertUnitEvent(75);
export const EVENT_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native___ConvertUnitEvent(76);
export const EVENT_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native___ConvertUnitEvent(77);
export const EVENT_UNIT_HERO_LEVEL = Jass_Constant_Native___ConvertUnitEvent(78);
export const EVENT_UNIT_HERO_SKILL = Jass_Constant_Native___ConvertUnitEvent(79);
export const EVENT_UNIT_HERO_REVIVABLE = Jass_Constant_Native___ConvertUnitEvent(80);
export const EVENT_UNIT_HERO_REVIVE_START = Jass_Constant_Native___ConvertUnitEvent(81);
export const EVENT_UNIT_HERO_REVIVE_CANCEL = Jass_Constant_Native___ConvertUnitEvent(82);
export const EVENT_UNIT_HERO_REVIVE_FINISH = Jass_Constant_Native___ConvertUnitEvent(83);
export const EVENT_UNIT_SUMMON = Jass_Constant_Native___ConvertUnitEvent(84);
export const EVENT_UNIT_DROP_ITEM = Jass_Constant_Native___ConvertUnitEvent(85);
export const EVENT_UNIT_PICKUP_ITEM = Jass_Constant_Native___ConvertUnitEvent(86);
export const EVENT_UNIT_USE_ITEM = Jass_Constant_Native___ConvertUnitEvent(87);
export const EVENT_UNIT_LOADED = Jass_Constant_Native___ConvertUnitEvent(88);
export const EVENT_UNIT_WIDGET_DEATH = Jass_Constant_Native___ConvertWidgetEvent(89);

export const EVENT_DIALOG_BUTTON_CLICK = Jass_Constant_Native___ConvertDialogEvent(90);
export const EVENT_DIALOG_CLICK = Jass_Constant_Native___ConvertDialogEvent(91);

export const EVENT_GAME_LOADED = Jass_Constant_Native___ConvertGameEvent(256);
export const EVENT_GAME_TOURNAMENT_FINISH_SOON = Jass_Constant_Native___ConvertGameEvent(257);
export const EVENT_GAME_TOURNAMENT_FINISH_NOW = Jass_Constant_Native___ConvertGameEvent(258);
export const EVENT_GAME_GAME_SAVE = Jass_Constant_Native___ConvertGameEvent(259);

export const EVENT_PLAYER_ARROW_LEFT_DOWN = Jass_Constant_Native___ConvertPlayerEvent(261);
export const EVENT_PLAYER_ARROW_LEFT_UP = Jass_Constant_Native___ConvertPlayerEvent(262);
export const EVENT_PLAYER_ARROW_RIGHT_DOWN = Jass_Constant_Native___ConvertPlayerEvent(263);
export const EVENT_PLAYER_ARROW_RIGHT_UP = Jass_Constant_Native___ConvertPlayerEvent(264);
export const EVENT_PLAYER_ARROW_DOWN_DOWN = Jass_Constant_Native___ConvertPlayerEvent(265);
export const EVENT_PLAYER_ARROW_DOWN_UP = Jass_Constant_Native___ConvertPlayerEvent(266);
export const EVENT_PLAYER_ARROW_UP_DOWN = Jass_Constant_Native___ConvertPlayerEvent(267);
export const EVENT_PLAYER_ARROW_UP_UP = Jass_Constant_Native___ConvertPlayerEvent(268);

export const EVENT_PLAYER_UNIT_SELL = Jass_Constant_Native___ConvertPlayerUnitEvent(269);
export const EVENT_PLAYER_UNIT_CHANGE_OWNER = Jass_Constant_Native___ConvertPlayerUnitEvent(270);
export const EVENT_PLAYER_UNIT_SELL_ITEM = Jass_Constant_Native___ConvertPlayerUnitEvent(271);
export const EVENT_PLAYER_UNIT_SPELL_CHANNEL = Jass_Constant_Native___ConvertPlayerUnitEvent(272);
export const EVENT_PLAYER_UNIT_SPELL_CAST = Jass_Constant_Native___ConvertPlayerUnitEvent(273);
export const EVENT_PLAYER_UNIT_SPELL_EFFECT = Jass_Constant_Native___ConvertPlayerUnitEvent(274);
export const EVENT_PLAYER_UNIT_SPELL_FINISH = Jass_Constant_Native___ConvertPlayerUnitEvent(275);
export const EVENT_PLAYER_UNIT_SPELL_ENDCAST = Jass_Constant_Native___ConvertPlayerUnitEvent(276);
export const EVENT_PLAYER_UNIT_PAWN_ITEM = Jass_Constant_Native___ConvertPlayerUnitEvent(277);

export const EVENT_UNIT_SELL = Jass_Constant_Native___ConvertUnitEvent(286);
export const EVENT_UNIT_CHANGE_OWNER = Jass_Constant_Native___ConvertUnitEvent(287);
export const EVENT_UNIT_SELL_ITEM = Jass_Constant_Native___ConvertUnitEvent(288);
export const EVENT_UNIT_SPELL_CHANNEL = Jass_Constant_Native___ConvertUnitEvent(289);
export const EVENT_UNIT_SPELL_CAST = Jass_Constant_Native___ConvertUnitEvent(290);
export const EVENT_UNIT_SPELL_EFFECT = Jass_Constant_Native___ConvertUnitEvent(291);
export const EVENT_UNIT_SPELL_FINISH = Jass_Constant_Native___ConvertUnitEvent(292);
export const EVENT_UNIT_SPELL_ENDCAST = Jass_Constant_Native___ConvertUnitEvent(293);
export const EVENT_UNIT_PAWN_ITEM = Jass_Constant_Native___ConvertUnitEvent(294);

export const LESS_THAN = Jass_Constant_Native___ConvertLimitOp(0);
export const LESS_THAN_OR_EQUAL = Jass_Constant_Native___ConvertLimitOp(1);
export const EQUAL = Jass_Constant_Native___ConvertLimitOp(2);
export const GREATER_THAN_OR_EQUAL = Jass_Constant_Native___ConvertLimitOp(3);
export const GREATER_THAN = Jass_Constant_Native___ConvertLimitOp(4);
export const NOT_EQUAL = Jass_Constant_Native___ConvertLimitOp(5);

export const UNIT_TYPE_HERO = Jass_Constant_Native___ConvertUnitType(0);
export const UNIT_TYPE_DEAD = Jass_Constant_Native___ConvertUnitType(1);
export const UNIT_TYPE_STRUCTURE = Jass_Constant_Native___ConvertUnitType(2);
export const UNIT_TYPE_FLYING = Jass_Constant_Native___ConvertUnitType(3);
export const UNIT_TYPE_GROUND = Jass_Constant_Native___ConvertUnitType(4);
export const UNIT_TYPE_ATTACKS_FLYING = Jass_Constant_Native___ConvertUnitType(5);
export const UNIT_TYPE_ATTACKS_GROUND = Jass_Constant_Native___ConvertUnitType(6);
export const UNIT_TYPE_MELEE_ATTACKER = Jass_Constant_Native___ConvertUnitType(7);
export const UNIT_TYPE_RANGED_ATTACKER = Jass_Constant_Native___ConvertUnitType(8);
export const UNIT_TYPE_GIANT = Jass_Constant_Native___ConvertUnitType(9);
export const UNIT_TYPE_SUMMONED = Jass_Constant_Native___ConvertUnitType(10);
export const UNIT_TYPE_STUNNED = Jass_Constant_Native___ConvertUnitType(11);
export const UNIT_TYPE_PLAGUED = Jass_Constant_Native___ConvertUnitType(12);
export const UNIT_TYPE_SNARED = Jass_Constant_Native___ConvertUnitType(13);
export const UNIT_TYPE_UNDEAD = Jass_Constant_Native___ConvertUnitType(14);
export const UNIT_TYPE_MECHANICAL = Jass_Constant_Native___ConvertUnitType(15);
export const UNIT_TYPE_PEON = Jass_Constant_Native___ConvertUnitType(16);
export const UNIT_TYPE_SAPPER = Jass_Constant_Native___ConvertUnitType(17);
export const UNIT_TYPE_TOWNHALL = Jass_Constant_Native___ConvertUnitType(18);
export const UNIT_TYPE_ANCIENT = Jass_Constant_Native___ConvertUnitType(19);
export const UNIT_TYPE_TAUREN = Jass_Constant_Native___ConvertUnitType(20);
export const UNIT_TYPE_POISONED = Jass_Constant_Native___ConvertUnitType(21);
export const UNIT_TYPE_POLYMORPHED = Jass_Constant_Native___ConvertUnitType(22);
export const UNIT_TYPE_SLEEPING = Jass_Constant_Native___ConvertUnitType(23);
export const UNIT_TYPE_RESISTANT = Jass_Constant_Native___ConvertUnitType(24);
export const UNIT_TYPE_ETHEREAL = Jass_Constant_Native___ConvertUnitType(25);
export const UNIT_TYPE_MAGIC_IMMUNE = Jass_Constant_Native___ConvertUnitType(26);

export const ITEM_TYPE_PERMANENT = Jass_Constant_Native___ConvertItemType(0);
export const ITEM_TYPE_CHARGED = Jass_Constant_Native___ConvertItemType(1);
export const ITEM_TYPE_POWERUP = Jass_Constant_Native___ConvertItemType(2);
export const ITEM_TYPE_ARTIFACT = Jass_Constant_Native___ConvertItemType(3);
export const ITEM_TYPE_PURCHASABLE = Jass_Constant_Native___ConvertItemType(4);
export const ITEM_TYPE_CAMPAIGN = Jass_Constant_Native___ConvertItemType(5);
export const ITEM_TYPE_MISCELLANEOUS = Jass_Constant_Native___ConvertItemType(6);
export const ITEM_TYPE_UNKNOWN = Jass_Constant_Native___ConvertItemType(7);
export const ITEM_TYPE_ANY = Jass_Constant_Native___ConvertItemType(8);
export const ITEM_TYPE_TOME = Jass_Constant_Native___ConvertItemType(2);

export const CAMERA_FIELD_TARGET_DISTANCE = Jass_Constant_Native___ConvertCameraField(0);
export const CAMERA_FIELD_FARZ = Jass_Constant_Native___ConvertCameraField(1);
export const CAMERA_FIELD_ANGLE_OF_ATTACK = Jass_Constant_Native___ConvertCameraField(2);
export const CAMERA_FIELD_FIELD_OF_VIEW = Jass_Constant_Native___ConvertCameraField(3);
export const CAMERA_FIELD_ROLL = Jass_Constant_Native___ConvertCameraField(4);
export const CAMERA_FIELD_ROTATION = Jass_Constant_Native___ConvertCameraField(5);
export const CAMERA_FIELD_ZOFFSET = Jass_Constant_Native___ConvertCameraField(6);

export const BLEND_MODE_NONE = Jass_Constant_Native___ConvertBlendMode(0);
export const BLEND_MODE_DONT_CARE = Jass_Constant_Native___ConvertBlendMode(0);
export const BLEND_MODE_KEYALPHA = Jass_Constant_Native___ConvertBlendMode(1);
export const BLEND_MODE_BLEND = Jass_Constant_Native___ConvertBlendMode(2);
export const BLEND_MODE_ADDITIVE = Jass_Constant_Native___ConvertBlendMode(3);
export const BLEND_MODE_MODULATE = Jass_Constant_Native___ConvertBlendMode(4);
export const BLEND_MODE_MODULATE_2X = Jass_Constant_Native___ConvertBlendMode(5);

export const RARITY_FREQUENT = Jass_Constant_Native___ConvertRarityControl(0);
export const RARITY_RARE = Jass_Constant_Native___ConvertRarityControl(1);

export const TEXMAP_FLAG_NONE = Jass_Constant_Native___ConvertTexMapFlags(0);
export const TEXMAP_FLAG_WRAP_U = Jass_Constant_Native___ConvertTexMapFlags(1);
export const TEXMAP_FLAG_WRAP_V = Jass_Constant_Native___ConvertTexMapFlags(2);
export const TEXMAP_FLAG_WRAP_UV = Jass_Constant_Native___ConvertTexMapFlags(3);

export const FOG_OF_WAR_MASKED = Jass_Constant_Native___ConvertFogState(1);
export const FOG_OF_WAR_FOGGED = Jass_Constant_Native___ConvertFogState(2);
export const FOG_OF_WAR_VISIBLE = Jass_Constant_Native___ConvertFogState(4);

export const CAMERA_MARGIN_LEFT = 0;
export const CAMERA_MARGIN_RIGHT = 1;
export const CAMERA_MARGIN_TOP = 2;
export const CAMERA_MARGIN_BOTTOM = 3;

export const EFFECT_TYPE_EFFECT = Jass_Constant_Native___ConvertEffectType(0);
export const EFFECT_TYPE_TARGET = Jass_Constant_Native___ConvertEffectType(1);
export const EFFECT_TYPE_CASTER = Jass_Constant_Native___ConvertEffectType(2);
export const EFFECT_TYPE_SPECIAL = Jass_Constant_Native___ConvertEffectType(3);
export const EFFECT_TYPE_AREA_EFFECT = Jass_Constant_Native___ConvertEffectType(4);
export const EFFECT_TYPE_MISSILE = Jass_Constant_Native___ConvertEffectType(5);
export const EFFECT_TYPE_LIGHTNING = Jass_Constant_Native___ConvertEffectType(6);

export const SOUND_TYPE_EFFECT = Jass_Constant_Native___ConvertSoundType(0);
export const SOUND_TYPE_EFFECT_LOOPED = Jass_Constant_Native___ConvertSoundType(1);

/*Math*/
export declare function Jass_Native___Deg2Rad(degrees: real): real;

export declare function Jass_Native___Rad2Deg(radians: real): real;

export declare function Jass_Native___Sin(radians: real): real;

export declare function Jass_Native___Cos(radians: real): real;

export declare function Jass_Native___Tan(radians: real): real;

export declare function Jass_Native___Asin(y: real): real;

export declare function Jass_Native___Acos(x: real): real;

export declare function Jass_Native___Atan(x: real): real;

export declare function Jass_Native___Atan2(x: real): real;

export declare function Jass_Native___SquareRoot(x: real): real;

export declare function Jass_Native___Pow(x: real, power: real): real;


/*Utility*/
export declare function Jass_Native___I2R(i: integer): real;

export declare function Jass_Native___R2I(r: real): integer;

export declare function Jass_Native___I2S(i: integer): string;

export declare function Jass_Native___R2S(r: real): String;

export declare function Jass_Native___R2SW(r: real, width: integer, precision: integer): string;

export declare function Jass_Native___S2I(s: string): integer;

export declare function Jass_Native___S2R(s: string): real;

export declare function Jass_Native___GetHandleId(h: handle): integer;

export declare function Jass_Native___SubString(source: string, start: integer, end: integer): string;

export declare function Jass_Native___StringLength(s: string): integer;

export declare function Jass_Native___StringCase(source: string, upper: boolean): string;

export declare function Jass_Native___StringHasH(s: string): integer;

export declare function Jass_Native___GetLocalizedString(source: string): string;

export declare function Jass_Native___GetLocalizedHotKey(source: string): integer;


export declare function Jass_Native___Native_SetMapName(name: string): nothing;

export declare function Jass_Native___SetMapDescription(description: string): nothing;

export declare function Jass_Native___SetTeams(teamcount: integer): nothing;

export declare function Jass_Native___SetPlayers(playercount: integer): nothing;

export declare function Jass_Native___DefineStartLocation(whichStartLoc: integer, x: real, y: real): nothing;

export declare function Jass_Native___DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): nothing;

export declare function Jass_Native___SetStartLocPrioCount(whichStartLoc: integer, priSlotCount: integer): nothing;

export declare function Jass_Native___SetStartLocPrio(
    whichStartLoc: integer,
    priSlotIndex: integer,
    otherStartLocIndex: integer,
    priority: startlocprio
): nothing;

export declare function Jass_Native___GetStartLocPrioSlot(
    whichStartLoc: integer,
    prioSlotIndex: integer,
): integer;

export declare function Jass_Native___GetStartLocPrio(
    whichStartLoc: integer,
    prioSlotIndex: integer
): startlocprio;

export declare function Jass_Native___SetGameTypeSupported(
    whichGameType: gametype,
    value: boolean
): nothing;

export declare function Jass_Native___SetMapFlag(
    whichMapFlags: mapflag,
    value: boolean
): nothing;

export declare function Jass_Native___SetGamePlacement(
    whichPlacementType: placement,
): nothing;

export declare function Jass_Native___SetGameSpeed(
    whichspeed: gamespeed,
): nothing;

export declare function Jass_Native___SetGameDifficulty(
    whichdifficulty: gamedifficulty
): nothing;

export declare function Jass_Native___SetResourceDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native___SetCreatureDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native___GetTeams(): integer;

export declare function Jass_Native___GetPlayers(): integer;

export declare function Jass_Native___IsGameTypeSuppored(
    whichGameType: gametype
): boolean;

export declare function Jass_Native___GetGameTypeSelected(): gametype;

export declare function Jass_Native___IsMapFlagSet(
    whichMapFlag: mapflag
): boolean;

export declare function Jass_Native___GetGamePlacement(): placement;

export declare function Jass_Native___GetGameSpeed(): gamespeed;

export declare function Jass_Native___GetGameDifficulty(): gamedifficulty;

export declare function Jass_Native___GetResourceDensity(): mapdensity;

export declare function Jass_Native___GetCreatureDensity(): mapdensity;

export declare function Jass_Native___GetStartLocationX(
    whichStartLocation: integer
): real;

export declare function Jass_Native___GetStartLocationY(
    whichStartLocation: integer
): real;

export declare function Jass_Native___GetStartLocationLoc(
    whichStartLocation: integer
): location;

export declare function Jass_Native___SetPlayerTeam(
    whichPlayer: player,
    whichTeam: integer
): nothing;

export declare function Jass_Native___SetPlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native___ForcePlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native___SetPlayerColor(
    whichPlayer: player,
    color: playercolor
): nothing;

export declare function Jass_Native___SetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype,
    value: boolean
): nothing;

export declare function Jass_Native___SetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate,
    rate: integer
): nothing;

export declare function Jass_Native___SetPlayerRacePreference(
    whichPlayer: player,
    whichRacePreference: racepreference,
    rate: integer
): nothing;

export declare function Jass_Native___SetPlayerRaceSelectable(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native___SetPlayerController(
    whichPlayer: player,
    controlType: mapcontrol
): nothing;

export declare function Jass_Native___SetPlayerName(
    whichPlayer: player,
    name: string
): nothing;

export declare function Jass_Native___SetPlayerOnScoreScreen(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native___GetPlayerTeam(
    whichPlayer: player,
): integer;

export declare function Jass_Native___GetPlayerStartLocation(
    whichPlayer: player,
): integer;

export declare function Jass_Native___GetPlayerColor(
    whichPlayer: player,
): playercolor;

export declare function Jass_Native___GetPlayerController(
    whichPlayer: player,
): mapcontrol;

export declare function Jass_Native___GetPlayerSlotState(
    whichPlayer: player,
): playerslotstate;

export declare function Jass_Native___GetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate
): integer;

export declare function Jass_Native___IsPlayerRacePrefSet(
    whichPlayer: player,
    pref: racepreference
): boolean;

export declare function Jass_Native___GetPlayerName(
    whichPlayer: player
): string;


/*Timer*/
export declare function Jass_Native___CreateTimer(): timer;

export declare function Jass_Native___DestroyTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native___TimerStart(
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: code
): nothing;

export declare function Jass_Native___TimerGetElapsed(
    whichTimer: timer,
): real;

export declare function Jass_Native___TimerGetRemaining(
    whichTimer: timer
): real;

export declare function Jass_Native___TimerGetTimeout(
    whichTimer: timer
): real;

export declare function Jass_Native___PauseTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native___ResumeTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native___GetExpiredTimer(): timer;

/*Group*/
export declare function Jass_Native___CreateGroup(): group;

export declare function Jass_Native___DestroyGroup(
    whichGroup: group
): nothing;

export declare function Jass_Native___GroupAddUnit(
    whichGroup: group,
    whichUnit: unit
): nothing;

export declare function Jass_Native___GroupRemoveUnit(
    whichGroup: group,
    whichUnit: unit
): nothing;

export declare function Jass_Native___GroupClear(
    whichGroup: group
): nothing;

export declare function Jass_Native___GroupEnumUnitsOfType(
    whichGroup: group,
    unitname: string,
    filter: boolexpr
): nothing;

export declare function Jass_Native___GroupEnumUnitsOfPlayer(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native___GroupEnumUnitsOfTypeCounted(
    whichGroup: group,
    unitname: string,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native___GroupEnumUnitsInRect(
    whichGroup: group,
    r: rect,
    filter: boolexpr,
): nothing;

export declare function Jass_Native___GroupEnumUnitsInRectCounted(
    whichGroup: group,
    r: rect,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native___GroupEnumUnitsInRange(
    whichGroup: group,
    x: real,
    y: real,
    radius: real,
    filter: boolexpr
): nothing;

export declare function Jass_Native___GroupEnumUnitsInRangeOfLoc(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr
): nothing;

export declare function Jass_Native___GroupEnumUnitsInRangeOfLocCounted(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native___GroupEnumUnitsSelected(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr,
): nothing;


export declare function Jass_Native___GroupImmediateOrder(
    whichGroup: group,
    order: string
): boolean;

export declare function Jass_Native___GroupImmediateOrderById(
    whichGroup: group,
    order: integer
): boolean;

export declare function Jass_Native___GroupPointOrder(
    whichGroup: group,
    order: string,
    whichLocation: location,
): boolean;

export declare function Jass_Native___GroupPointOrderLoc(
    whichGroup: group,
    order: string,
    whichLocation: location
): boolean;

export declare function Jass_Native___GroupPointOrderById(
    whichGroup: group,
    order: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___GroupPointOrderByIdLoc(
    whichGroup: group,
    order: integer,
    whichLocation: location
): boolean;

export declare function Jass_Native___GroupTargetOrder(
    whichGroup: group,
    order: string,
    targetWidget: widget
): boolean;

export declare function Jass_Native___GroupTargetOrderById(
    whichGroup: group,
    order: integer,
    targetWidget: widget
): boolean;

export declare function Jass_Native___ForceGroup(
    whichGroup: group,
    callback: code
): nothing;

export declare function Jass_Native___FirstOfGroup(
    whichGroup: group,
): unit;


/*Force Api*/
export declare function Jass_Native___CreateForce(): force;

export declare function Jass_Native___DestroyForce(
    whichForce: force
): nothing;

export declare function Jass_Native___ForceAddPlayer(
    whichForce: force,
    whichPlayer: player
): nothing;

export declare function Jass_Native___ForceRemovePlayer(
    whichForce: force,
    whichPlayer: player
): nothing;

export declare function Jass_Native___ForceClear(
    whichForce: force,
): nothing;

export declare function Jass_Native___ForceEnumPlayers(
    whichForce: force,
    filter: boolexpr
): nothing;

export declare function Jass_Native___ForceEnumPlayersCounted(
    whichForce: force,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native___ForceEnumAllies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native___ForceEnumEnemies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native___ForForce(
    whichForce: force,
    callback: code
): nothing;


export declare function Jass_Native___Rect(
    minx: real,
    miny: real,
    maxx: real,
    maxy: real
): rect;

export declare function Jass_Native___RectFromLoc(
    min: location,
    max: location
): rect;

export declare function Jass_Native___RemoveRect(
    whichRect: rect
): nothing;

export declare function Jass_Native___SetRect(
    whichRect: rect,
    minx: real,
    miny: real,
    maxx: real,
    maxy: real
): nothing;

export declare function Jass_Native___SetRectFromLoc(
    whichRect: rect,
    min: location,
    max: location
): nothing;

export declare function Jass_Native___MoveRectTo(
    whichRect: rect,
    newCenterX: real,
    newCenterY: real
): nothing;

export declare function Jass_Native___MoveREctToLoc(
    whichRect: rect,
    newCenterLoc: location
): nothing;

export declare function Jass_Native___GetRectCenterX(
    whichRect: rect,
): real;

export declare function Jass_Native___GetRectCenterY(
    whichRect: rect,
): real;

export declare function Jass_Native___GetRectMinX(
    whichRect: rect,
): real;

export declare function Jass_Native___GetRectMinY(
    whichRect: rect,
): real;

export declare function Jass_Native___GetRectMaxX(
    whichRect: rect,
): real;

export declare function Jass_Native___GetRectMaxY(
    whichRect: rect,
): real;


export declare function Jass_Native___CreateRegion(): region;

export declare function Jass_Native___RemoveRegion(
    whichRegion: region
): nothing;

export declare function Jass_Native___RegionAddRect(
    whichRegion: region,
    r: rect
): nothing;

export declare function Jass_Native___RegionClearRect(
    whichRegion: region,
    r: rect
): nothing;

export declare function Jass_Native___RegionAddCell(
    whichRegion: region,
    x: real,
    y: real
): nothing;

export declare function Jass_Native___RegionAddCellAtLoc(
    whichRegion: region,
    whichLocation: location
): nothing;

export declare function Jass_Native___RegionClearCell(
    whichRegion: region,
    x: real,
    y: real
): nothing;

export declare function Jass_Native___RegionClearCellAtLoc(
    whichRegion: region,
    whichLocation: location
): nothing;

export declare function Jass_Native___Location(
    x: real,
    y: real
): location;

export declare function Jass_Native___RemoveLocation(
    whichLocation: location
): nothing;

export declare function Jass_Native___MoveLocation(
    whichLocation: location,
    newX: real,
    newY: real
): nothing;

export declare function Jass_Native___GetLocationX(
    whichLocation: location,
): real;

export declare function Jass_Native___GetLocationY(
    whichLocation: location,
): real;

export declare function Jass_Native___GetLocationZ(
    whichLocation: location,
): real;

export declare function Jass_Native___IsUnitInRegion(
    whichRegion: region,
    whichUnit: unit
): boolean;

export declare function Jass_Native___IsPointInRegion(
    whichRegion: region,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IsLocationInRegion(
    whichRegion: region,
    whichLocation: location
): boolean;

export declare function Jass_Native___GetWorldBounds(): rect;

/*Trigger*/
export declare function Jass_Native___CreateTrigger(): trigger;

export declare function Jass_Native___DestroyTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___ResetTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___EnableTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___DisableTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___IsTriggerEnabled(
    whichTrigger: trigger
): boolean;

export declare function Jass_Native___TriggerWaitOnSleeps(
    whichTrigger: trigger,
    flag: boolean
): nothing;

export declare function Jass_Native___IsTriggerWaitOnSleeps(
    whichTrigger: trigger,
): boolean;

export declare function Jass_Constant_Native___GetFilterUnit(): unit;

export declare function Jass_Constant_Native___GetEnumUnit(): unit;

export declare function Jass_Constant_Native___GetFilterDestructable(): destructable;

export declare function Jass_Constant_Native___GetEnumDestructable(): destructable;

export declare function Jass_Constant_Native___GetFilterItem(): item;

export declare function Jass_Constant_Native___GetEnumPlayer(): item;

export declare function Jass_Constant_Native___GetFilterPlayer(): player;

export declare function Jass_Constant_Native___GetEnumPlayer(): player;

export declare function Jass_Constant_Native___GetTriggeringTrigger(): trigger;

export declare function Jass_Constant_Native___GetTriggerEventId(): eventid;

export declare function Jass_Constant_Native___GetTriggerEvalCount(
    whichTrigger: trigger
): integer;

export declare function Jass_Constant_Native___GetTriggerExecCount(
    whichTrigger: trigger
): integer;

export declare function Jass_Native___ExecuteFunc(
    funcName: string
): nothing;

/*Boolean*/

export declare function Jass_Native___Add(
    operandA: boolexpr,
    operandB: boolexpr,
): boolexpr;

export declare function Jass_Native___Or(
    operandA: boolexpr,
    operandB: boolexpr,
): boolexpr;

export declare function Jass_Native___Not(
    operand: boolexpr,
): boolexpr;

export declare function Jass_Native___Condition(
    func: code
): conditionfuncs;

export declare function Jass_Native___DestroyCondition(
    c: conditionfuncs
): nothing;

export declare function Jass_Native___Filter(
    func: code
): filterfunc;

export declare function Jass_Native___DestroyFilter(
    f: filterfunc
): nothing;

export declare function Jass_Native___DestroyBoolExpr(
    e: boolexpr
): nothing;

/*Trigger GameEvent*/
export declare function Jass_Native___TriggerRegisterVariableEvent(
    whichTrigger: trigger,
    varName: string,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Native___TriggerRegisterTimerEvent(
    whichTrigger: trigger,
    timeout: real,
    periodic: boolean
): event;

export declare function Jass_Native___TriggerRegisterTimerExpireEvent(
    whichTrigger: trigger,
    t: timer
): event;

export declare function Jass_Native___TriggerRegisterGameStateEvent(
    whichTrigger: trigger,
    whichState: gamestate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Native___TriggerRegisterDialogEvent(
    whichTrigger: trigger,
    whichDialog: dialog
): event;

export declare function Jass_Native___TriggerRegisterDialogButtonEvent(
    whichTrigger: trigger,
    whichButton: button
): event;

export declare function Jass_Constant_Native___GetEventGameState(): gamestate;

export declare function Jass_Native___TriggerRegisterEnterRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native___GetTriggeringRegion(): region;

export declare function Jass_Constant_Native___GetEnteringUnit(): unit;

export declare function Jass_Native___TriggerRegisterLeaveRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native___GetLeavingUnit(): unit;

export declare function Jass_Native___TriggerRegisterTrackableHitEvent(
    whichTrigger: trigger,
    t: trackable
): event;

export declare function Jass_Native___TriggerRegisterTrackableTrackEvent(
    whichTrigger: trigger,
    t: trackable
): event;

export declare function Jass_Constant_Native___GetTriggeringTrackable(): trackable;

export declare function Jass_Constant_Native___GetClickedButton(): button;

export declare function Jass_Constant_Native___GetClickedDialog(): dialog;

export declare function Jass_Constant_Native___GetTournamentFinishSoonTimeRemaining(): real;

export declare function Jass_Constant_Native___GetTournamentFinishNowRule(): integer;

export declare function Jass_Constant_Native___GetTournamentFinishNowPlayer(): player;

export declare function Jass_Constant_Native___GetTournamentScore(
    whichPlayer: player
): integer;

export declare function Jass_Constant_Native___GetSaveBasicFilename(): string;

/*Player Event*/
export declare function Jass_Native___TriggerRegisterPlayerEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerEvent: playerevent
): event;

export declare function Jass_Constant_Native___GetTriggerPlayer(): player;

export declare function Jass_Native___TriggerRegisterPlayerUnitEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerUnitEvent: playerunitevent,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native___GetLevelingUnit(): unit;

export declare function Jass_Constant_Native___GetLearningUnit(): unit;

export declare function Jass_Constant_Native___GetLearnedSkill(): integer;

export declare function Jass_Constant_Native___GetLearnedSkillLevel(): integer;

export declare function Jass_Constant_Native___GetRevivableUnit(): unit;

export declare function Jass_Constant_Native___GetRevivingUnit(): unit;

export declare function Jass_Constant_Native___GetAttacker(): unit;

export declare function Jass_Constant_Native___GetRescuer(): unit;

export declare function Jass_Constant_Native___GetDyingUnit(): unit;

export declare function Jass_Constant_Native___GetKillingUnit(): unit;

export declare function Jass_Constant_Native___GetDecayingUnit(): unit;

export declare function Jass_Constant_Native___GetConstructingStructure(): unit;

export declare function Jass_Constant_Native___GetCancelledStructure(): unit;

export declare function Jass_Constant_Native___GetConstructedStructure(): unit;

export declare function Jass_Constant_Native___GetResearchingUnit(): unit;

export declare function Jass_Constant_Native___GetResearched(): integer;

export declare function Jass_Constant_Native___GetTrainedUnitType(): integer;

export declare function Jass_Constant_Native___GetTrainedUnit(): unit;

export declare function Jass_Constant_Native___GetDetectedUnit(): unit;

export declare function Jass_Constant_Native___GetSummoningUnit(): unit;

export declare function Jass_Constant_Native___GetSummonedUnit(): unit;

export declare function Jass_Constant_Native___GetTransportUnit(): unit;

export declare function Jass_Constant_Native___GetLoadedUnit(): unit;

export declare function Jass_Constant_Native___GetSellingUnit(): unit;

export declare function Jass_Constant_Native___GetSoldUnit(): unit;

export declare function Jass_Constant_Native___GetBuyingUnit(): unit;

export declare function Jass_Constant_Native___GetSoldItem(): item;

export declare function Jass_Constant_Native___GetChangingUnit(): unit;

export declare function Jass_Constant_Native___GetChangingUnitPrevOwner(): player;

export declare function Jass_Constant_Native___GetManipulatingUnit(): unit;

export declare function Jass_Constant_Native___GetManipulatedItem(): item;

export declare function Jass_Constant_Native___GetOrderedUnit(): unit;

export declare function Jass_Constant_Native___GetIssuedOrderId(): integer;

export declare function Jass_Constant_Native___GetOrderPointX(): real;

export declare function Jass_Constant_Native___GetOrderPointY(): real;

export declare function Jass_Constant_Native___GetOrderPointLoc(): location;

export declare function Jass_Constant_Native___GetOrderTarget(): widget;

export declare function Jass_Constant_Native___GetOrderTargetDestructable(): destructable;

export declare function Jass_Constant_Native___GetOrderTargetItem(): item;

export declare function Jass_Constant_Native___GetOrderTargetUnit(): unit;

export declare function Jass_Constant_Native___GetSpellAbilityUnit(): unit;

export declare function Jass_Constant_Native___GetSpellAbilityId(): integer;

export declare function Jass_Constant_Native___GetSpellAbility(): ability;

export declare function Jass_Constant_Native___GetSpellTargetLoc(): location;

export declare function Jass_Constant_Native___GetSpellTargetX(): real;

export declare function Jass_Constant_Native___GetSpellTargetY(): real;

export declare function Jass_Constant_Native___GetSpellTargetDestructable(): destructable;

export declare function Jass_Constant_Native___GetSpellTargetItem(): item;

export declare function Jass_Native___TriggerRegisterPlayerAllianceChange(
    whichTrigger: trigger,
    whichPlayer: player,
    whichAlliance: alliancetype
): event;

export declare function Jass_Native___TriggerRegisterPlayerStateEvent(
    whichTrigger: trigger,
    whichplayer: player,
    whichState: playerstate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Constant_Native___GetEventPlayerState(): playerstate;

export declare function Jass_Native___TriggerRegisterPlayerChatState(
    whichTrigger: trigger,
    whichPlayer: player,
    chatMessageToDetect: string,
    exactMatchOnly: boolean,
): event;

export declare function Jass_Constant_Native___GetEventPlayerChatString(): String;

export declare function Jass_Constant_Native___GetEventPlayerChatStringMatched(): string;

export declare function Jass_Native___TriggerRegisterDeathEvent(
    whichTrigger: trigger,
    whichWidget: widget
): event;

export declare function Jass_Constant_Native___GetTriggerUnit(): unit;

export declare function Jass_Native___TriggerRegisterUnitStateEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Constant_Native___GetEventUnitState(): unitstate;

export declare function Jass_Native___TriggerRegisterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: event
): event;

export declare function Jass_Constant_Native___GetEventDamage(): real;

export declare function Jass_Constant_Native___GetEventDamageSource(): unit;

export declare function Jass_Constant_Native___GetEventDetectingPlayer(): player;

export declare function Jass_Native___TriggerRegisterFilterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native___GetEventTargetUnit(): unit;

export declare function Jass_Native___TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: real,
    filter: boolexpr
): event;

export declare function Jass_Native___TriggerAddCondition(
    whichTrigger: trigger,
    condition: boolexpr
): triggercondition;

export declare function Jass_Native___TriggerRemoveCondition(
    whichTrigger: trigger,
    whichCondition: triggercondition
): nothing;

export declare function Jass_Native___TriggerClearConditions(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___TriggerAddAction(
    whichTrigger: trigger,
    actionFunc: code
): triggeraction;

export declare function Jass_Native___TriggerRemoveAction(
    whichTrigger: trigger,
    whichAction: triggeraction
): nothing;

export declare function Jass_Native___TriggerClearActions(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___TriggerSleepAction(
    timeout: real
): nothing;

export declare function Jass_Native___TriggerWaitForSound(
    s: sound,
    offset: real
): nothing;

export declare function Jass_Native___TriggerEvaluate(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___TriggerExecute(
    whichTrigger: trigger
): boolean;

export declare function Jass_Native___TriggerExecuteWait(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native___TriggerSyncStart(): nothing;

export declare function Jass_Native___TriggerSyncReady(): nothing;

export declare function Jass_Native___GetWidgetLife(
    whichWidget: widget
): real;

export declare function Jass_Native___SetWidgetLife(
    whichWidget: widget,
    newLife: real
): nothing;

export declare function Jass_Native___GetWidgetX(
    whichWidget: widget,
): real;

export declare function Jass_Native___GetWidgetY(
    whichWidget: widget,
): real;

export declare function Jass_Constant_Native___GetTriggerWidget(): widget;

export declare function Jass_Native___CreateDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native___CreateDestructableZ(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native___CreateDeadDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native___(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native___RemoveDestructable(
    d: destructable
): nothing;

export declare function Jass_Native___KillDestructable(
    d: destructable
): nothing;

export declare function Jass_Native___SetDestructableInunlnerable(
    d: destructable,
    flag: boolean
): nothing;

export declare function Jass_Native___IsDestructableInvulnerable(
    d: destructable
): boolean;

export declare function Jass_Native___EnumDestructablesInRect(
    r: rect,
    filter: boolexpr,
    actionFunc: code
): nothing;

export declare function Jass_Native___GetDestructableTypeId(
    d: destructable
): integer;

export declare function Jass_Native___GetDestructableX(
    d: destructable
): real;

export declare function Jass_Native___GetDestructableY(
    d: destructable
): real;

export declare function Jass_Native___SetDestructableLift(
    d: destructable,
    life: real
): nothing;

export declare function Jass_Native___GetDestructableLife(
    d: destructable
): real;

export declare function Jass_Native___SetDestructableMaxLife(
    d: destructable,
    max: real
): nothing;

export declare function Jass_Native___GetDestructableMaxLife(): real;

export declare function Jass_Native___DestructableRestoreLife(
    d: destructable,
    life: real,
    birth: boolean
): nothing;

export declare function Jass_Native___QueueDestructableAnimation(
    d: destructable,
    whichAnimation: string,
): nothing;

export declare function Jass_Native___SetDestructableAnimation(
    d: destructable,
    whichAnimation: string
): nothing;

export declare function Jass_Native___SetDestructableAnimatioNSpeed(
    d: destructable,
    speedFactor: real
): nothing;

export declare function Jass_Native___ShowDestructable(
    d: destructable,
    flag: boolean
): nothing;

export declare function Jass_Native___GetDestructableOccluderHeight(
    d: destructable
): real;

export declare function Jass_Native___SetDestructableOccluderHeight(
    d: destructable,
    height: real
): nothing;

export declare function Jass_Native___GetDestructableName(
    d: destructable
): string;

export declare function Jass_Constant_Native___GetTriggerDestructable(): destructable;

/*Item*/
export declare function Jass_Native___CreateItem(
    itemid: integer,
    x: real,
    y: real
): item;

export declare function Jass_Native___RemoveItem(
    whichItem: item
): nothing;

export declare function Jass_Native___GetItemPlayer(
    whichItem: item
): player;

export declare function Jass_Native___GetItemTypeId(
    i: item
): integer;

export declare function Jass_Native___GetItemX(
    i: item
): real;

export declare function Jass_Native___GetItemY(
    i: item
): real;

export declare function Jass_Native___SetItemPosition(
    i: item,
    x: real,
    y: real
): nothing;

export declare function Jass_Native___SetItemDropOnDeath(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native___SetItemDropable(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native___SetItemPawnable(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native___SetItemPlayer(
    whichItem: item,
    whichPlayer: player,
    changeColor: boolean
): nothing;

export declare function Jass_Native___SetItemInvulnerable(
    whichItem: item,
    flag: boolean
): nothing;

export declare function Jass_Native___IsItemInvulnerable(
    whichItem: item
): boolean;

export declare function Jass_Native___SetItemVisible(
    whichItem: item,
    flag: boolean
): nothing;

export declare function Jass_Native___IsItemVisible(
    whichItem: item,
): boolean;

export declare function Jass_Native___IsItemOwned(
    whichItem: item,
): boolean;

export declare function Jass_Native___IsItemPowerup(
    whichItem: item
): boolean;

export declare function Jass_Native___IsItemSellable(
    whichItem: item
): boolean;

export declare function Jass_Native___IsItemPawnable(
    whichItem: item
): boolean;

export declare function Jass_Native___IsItemIdPowerup(
    itemid: integer
): boolean;

export declare function Jass_Native___IsItemIdSellable(
    itemid: integer
): boolean;

export declare function Jass_Native___IsItemIdPawnable(
    itemid: integer
): boolean;

export declare function Jass_Native___EnumItemsInRect(
    r: rect,
    filter: boolexpr,
    actionFunc: code
): nothing;

export declare function Jass_Native___GetItemLevel(
    whichItem: item
): integer;

export declare function Jass_Native___GetItemType(
    whichItem: item
): itemtype;

export declare function Jass_Native___SetItemDropID(
    whichItem: item,
    unitId: integer
): nothing;

export declare function Jass_Constant_Native___GetItemName(
    whichItem: item
): string;

export declare function Jass_Native___GetItemCharges(
    whichItem: item
): integer;

export declare function Jass_Native___SetItemCharges(
    whichItem: item,
    charges: integer
): nothing;

export declare function Jass_Native___GetItemUserData(
    whichItem: item
): integer;

export declare function Jass_Native___SetItemUserData(
    whichItem: item,
    data: integer
): nothing;

/*Unit*/
export declare function Jass_Native___CreateUnit(
    id: player,
    unitid: integer,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native___CreateUnitByName(
    whichPlayer: player,
    unitname: string,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native___CreateUnitAtLoc(
    id: player,
    unitid: integer,
    whichLocation: location,
    face: real
): unit;

export declare function Jass_Native___CreateUnitAtLocByName(
    id: player,
    unitname: string,
    whichLocation: location,
    face: real
): unit;

export declare function Jass_Native___CreateCorpse(
    whichPlayer: player,
    unitid: integer,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native___KillUnit(
    whichUnit: unit
): nothing;

export declare function Jass_Native___RemoveUNit(
    whichUnit: unit
): nothing;


export declare function Jass_Native___ShowUnit(
    whichUnit: unit,
    show: boolean
): nothing;

export declare function Jass_Native___SetUnitState(
    whichUnit: unit,
    whichUnitState: unitstate,
    newVal: real
): nothing;

export declare function Jass_Native___SetUnitX(
    whichUnit: unit,
    newX: real
): nothing;

export declare function Jass_Native___SetUnitY(
    whichUnit: unit,
    newY: real
): nothing;

export declare function Jass_Native___SetUnitPosition(
    whichUnit: unit,
    newX: real,
    newY: real
): nothing;

export declare function Jass_Native___SetUnitPositionLoc(
    whichUnit: unit,
    whichLocation: location
): nothing;

export declare function Jass_Native___SetUnitFacing(
    whichUnit: unit,
    facingAngle: real
): nothing;

export declare function Jass_Native___SetUnitFacingTimed(
    whichUnit: unit,
    facingAngle: real,
    duration: real
): nothing;

export declare function Jass_Native___SetUnitMoveSpeed(
    whichUnit: unit,
    newSpeed: real
): nothing;

export declare function Jass_Native___SetUnitFlyHeight(
    whichUnit: unit,
    newSpeed: real
): nothing;

export declare function Jass_Native___SetUnitTurnSpeed(
    whichUnit: unit,
    newTurnSpeed: real
): nothing;

export declare function Jass_Native___SetUnitPropWindow(
    whichUnit: unit,
    newPropWindowAngle: real
): nothing;

export declare function Jass_Native___SetUnitAcquireRange(
    whichUnit: unit,
    newAcquireRange: real
): nothing;

export declare function Jass_Native___SetUnitCreepGuard(
    whichUnit: unit,
    creepGuard: boolean
): nothing;

export declare function Jass_Native___GetUnitAcquireRange(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitTurnSpeed(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitPropWindow(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitFlyHeight(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitDefaultAcquireRange(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitDefaultTurnSpeed(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitDefaultPropWindow(
    whichUnit: unit
): real;

export declare function Jass_Native___GetUnitDefaultFlyHeight(
    whichUnit: unit
): real;

export declare function Jass_Native___SetUnitOwner(
    whichUnit: unit,
    whichPlayer: player,
    changeColor: boolean
): nothing;

export declare function Jass_Native___SetUnitColor(
    whichUnit: unit,
    whichColor: playercolor
): nothing;

export declare function Jass_Native___SetUnitScale(
    whichUnit: unit,
    scaleX: real,
    scaleY: real,
    scaleZ: real
): nothing;

export declare function Jass_Native___SetUnitTimeScale(
    whichUnit: unit,
    timeScale: real
): nothing;

export declare function Jass_Native___SetUnitBlendTime(
    whichUnit: unit,
    blendTime: real
): nothing;

export declare function Jass_Native___SetUnitVertexColor(
    whichUnit: unit,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___QueueUnitAnimation(
    whichUnit: unit,
    whichAnimation: string
): nothing;

export declare function Jass_Native___SetUnitAnimation(
    whichUnit: unit,
    whichAnimation: string
): nothing;

export declare function Jass_Native___SetUnitAnimationByIndex(
    whichUnit: unit,
    whichAnimation: integer
): nothing;

export declare function Jass_Native___SetUnitAnimationWithRarity(
    whichUnit: unit,
    whichAnimation: string,
    rarity: raritycontrol
): nothing;

export declare function Jass_Native___AddUnitAnimationProperties(
    whichUnit: unit,
    animProperties: string,
    add: boolean
): nothing;

export declare function Jass_Native___SetUnitLookAt(
    whichUnit: unit,
    whichBone: string,
    lookAtTarget: unit,
    offsetX: real,
    offsetY: real,
    offsetZ: real
): nothing;

export declare function Jass_Native___ResetUnitLookAt(
    whichUnit: unit,
    range: real
): nothing;

export declare function Jass_Native___SetUnitRescuable(
    whichUnit: unit,
    byWhichPlayer: player,
    flag: boolean
): nothing;

export declare function Jass_Native___SetUnitRescueRange(
    whichUnit: unit,
    range: real
): nothing;

export declare function Jass_Native___SetHeroStr(
    whichHero: unit,
    newStr: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native___SetHeroAgi(
    whichHero: unit,
    newAgi: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native___SetHeroInt(
    whichHero: unit,
    newInt: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native___GetHeroStr(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native___GetHeroAgi(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native___GetHeroInt(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native___UnitStringHeroLevel(
    whichHero: unit,
    howManyLevels: integer
): boolean;

export declare function Jass_Native___GetHeroXP(
    whichHero: unit
): integer;

export declare function Jass_Native___SetHeroXP(
    whichHero: unit,
    newXpVal: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Native___GetHeroSkillPoints(
    whichHero: unit,
): integer;

export declare function Jass_Native___UnitModifySKillPoints(
    whichHero: unit,
    skillPointDelta: integer
): boolean;

export declare function Jass_Native___AddHeroXP(
    whichHero: unit,
    xpToAdd: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Native___SetHeroLevel(
    whichHero: unit,
    level: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Constant_Native___GetHeroLevel(
    whichHero: unit
): integer;

export declare function Jass_Constant_Native___GetUnitLevel(
    whichUnit: unit,
): integer;

export declare function Jass_Native___GetHeroProperName(
    whichHero: unit
): string;

export declare function Jass_Native___SuspendHeroXP(
    whichHero: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___IsSuspendedXP(
    whichHero: unit
): boolean;

export declare function Jass_Native___SelectHeroSkill(
    whichHero: unit,
    abilcode: integer
): nothing;

export declare function Jass_Native___GetUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native___DecUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native___IncUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native___SetUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer,
    level: integer
): integer;

export declare function Jass_Native___ReviveHero(
    whichHero: unit,
    x: real,
    y: real,
    doEyecandy: boolean
): boolean;

export declare function Jass_Native___ReviveHeroLoc(
    whichHero: unit,
    loc: location,
    doEyecandy: boolean
): boolean;

export declare function Jass_Native___SetUnitExploded(
    whichUnit: unit,
    exploded: boolean
): nothing;

export declare function Jass_Native___SetUnitInvulnerable(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___PauseUnit(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___IsUnitPaused(
    whichHero: unit
): boolean;

export declare function Jass_Native___SetUnitPathing(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___ClearSelection(): nothing;

export declare function Jass_Native___SelectUnit(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___GetUnitPointValue(
    whichUnit: unit
): integer;

export declare function Jass_Native___GetUnitPointValueByType(
    unitType: integer
): integer;

export declare function Jass_Native___UnitAddItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native___UnitAddItemById(
    whichUnit: unit,
    itemid: integer
): item;

export declare function Jass_Native___UnitAddItemToSlotById(
    whichUnit: unit,
    itemid: integer,
    itemSolt: integer
): boolean;

export declare function Jass_Native___UnitRemoveItem(
    whichUnit: unit,
    whichItem: item
): nothing;

export declare function Jass_Native___UnitRemoveItemFromSlot(
    whichUnit: unit,
    itemSlot: integer
): item;

export declare function Jass_Native___UnitHasItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native___UnitItemInSlot(
    whichUnit: unit,
    itemSlot: integer
): item;

export declare function Jass_Native___UnitInventorySize(
    whichUnit: unit
): integer;

export declare function Jass_Native___UnitDropItemPoint(
    whichUnit: unit,
    whichItem: item,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___UnitDropItemSlot(
    whichUnit: unit,
    whichItem: item,
    slot: integer
): boolean;

export declare function Jass_Native___UnitDropItemTarget(
    whichUnit: unit,
    whichItem: item,
    target: widget
): boolean;

export declare function Jass_Native___UnitUseItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native___UnitUseItemPoint(
    whichUnit: unit,
    whichItem: item,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___UnitUseItemTarget(
    whichUnit: unit,
    whichItem: item,
    target: widget
): boolean;

export declare function Jass_Constant_Native___GetUnitX(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native___GetUnitY(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native___GetUnitLoc(
    whichUnit: unit
): location;

export declare function Jass_Constant_Native___GetUnitFacing(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native___GetUnitMoveSpeed(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native___GetUnitDefaultMoveSpeed(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native___GetUnitState(
    whichUnit: unit,
    whichUnitState: unitstate
): real;

export declare function Jass_Constant_Native___GetOwningPlayer(
    whichUnit: unit
): player;

export declare function Jass_Constant_Native___GetUnitTypeId(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native___GetUnitRace(
    whichUnit: unit
): race;

export declare function Jass_Constant_Native___GetUnitName(
    whichUnit: unit
): string;

export declare function Jass_Constant_Native___GetUnitFoodUsed(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native___GetUnitFoodMade(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native___GetFoodMade(
    unitId: integer
): integer;

export declare function Jass_Constant_Native___GetFoodUsed(
    unitId: integer
): integer;

export declare function Jass_Native___SetUnitUseFood(
    whichUnit: unit,
    useFood: boolean
): nothing;

export declare function Jass_Constant_Native___GetUnitRallyPoint(
    whichUnit: unit
): location;

export declare function Jass_Constant_Native___GetUnitRallyUnit(
    whichUnit: unit
): unit;

export declare function Jass_Constant_Native___GetUnitRallyDestructable(
    whichUnit: unit
): destructable;

export declare function Jass_Constant_Native___IsUnitInGroup(
    whichUnit: unit,
    whichGroup: group
): boolean;

export declare function Jass_Constant_Native___IsUNitInForce(
    whichUnit: unit,
    whichForce: force
): boolean;

export declare function Jass_Constant_Native___IsUnitOwnedByPlayer(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitAlly(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitEnemy(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitVisible(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitDetected(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitInvisible(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitFogged(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitMasked(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitSelected(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsUnitRace(
    whichUnit: unit,
    whichRace: race
): boolean;

export declare function Jass_Constant_Native___IsUnitType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Constant_Native___IsUnit(
    whichUnit: unit,
    whichSpecifiedUnit: unit
): boolean;

export declare function Jass_Constant_Native___IsUnitInRange(
    whichUnit: unit,
    otherUnit: unit,
    distance: real
): boolean;

export declare function Jass_Constant_Native___IsUnitInRangeXY(
    whichUnit: unit,
    x: real,
    y: real,
    distance: real
): boolean;

export declare function Jass_Constant_Native___IsUnitInRangeLoc(
    whichUnit: unit,
    whichLocation: location,
    distance: real
): boolean;

export declare function Jass_Constant_Native___IsUnitHidden(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native___IsUnitIllusion(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native___IsUnitInTransport(
    whichUnit: unit,
    whichTransport: unit
): boolean;

export declare function Jass_Constant_Native___IsUnitLoaded(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native___IsHeroUniteId(
    unitId: integer
): boolean;

export declare function Jass_Constant_Native___IsUnitIdType(
    unitId: integer,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native___UnitShareVision(
    whichUnit: unit,
    whichPlayer: player,
    share: boolean
): nothing;

export declare function Jass_Native___UnitSuspendDecay(
    whichUnit: unit,
    suspend: boolean
): nothing;

export declare function Jass_Native___UnitAddType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native___UnitRemoveType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native___UnitAddAbility(
    whichUnit: unit,
    abilityId: integer
): boolean;

export declare function Jass_Native___UnitRemoveAbility(
    whichUnit: unit,
    abilityId: integer
): boolean;

export declare function Jass_Native___UnitMakeAbilityPermanent(
    whichUnit: unit,
    permanent: boolean,
    abilityId: integer
): boolean;

export declare function Jass_Native___UnitRemoveBuffs(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean
): nothing;

export declare function Jass_Native___UnitRemoveBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): nothing;

export declare function Jass_Native___UnitHasBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): boolean;

export declare function Jass_Native___UnitCountBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): integer;

export declare function Jass_Native___UnitAddSleep(
    whichUnit: unit,
    add: boolean
): nothing;

export declare function Jass_Native___UnitCanSleep(
    whichUnit: unit
): boolean;

export declare function Jass_Native___UnitAddSleepPerm(
    whichUnit: unit,
    add: boolean
): nothing;


export declare function Jass_Native___UnitCanSleepPerm(
    whichUnit: unit
): boolean;

export declare function Jass_Native___UnitIsSleeping(
    whichUnit: unit
): boolean;

export declare function Jass_Native___UnitWakeUp(
    whichUnit: unit
): nothing;

export declare function Jass_Native___UnitApplyTimedLife(
    whichUnit: unit,
    buffId: integer,
    duration: real
): nothing;

export declare function Jass_Native___UnitIgnoreAlarm(
    whichUnit: unit,
    flag: boolean
): boolean;

export declare function Jass_Native___UnitIgnoreAlarmToggled(
    whichUnit: unit
): boolean;

export declare function Jass_Native___UnitResetCooldown(
    whichUnit: unit
): nothing;

export declare function Jass_Native___UnitSetConstructionProgress(
    whichUnit: unit,
    percentage: integer
): nothing;

export declare function Jass_Native___UnitSetUpgradeProgress(
    whichUnit: unit,
    percentage: integer
): nothing;

export declare function Jass_Native___UnitPauseTimedLife(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___UnitSetUsesAltIcon(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native___UnitDamagePoint(
    whichUnit: unit,
    delay: real,
    radius: real,
    x: real,
    y: real,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean;

export declare function Jass_Native___UnitDamageTarget(
    whichUnit: unit,
    target: widget,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean;

export declare function Jass_Native___IssueImmediateOrder(
    whichUnit: unit,
    order: string
): boolean;

export declare function Jass_Native___IssueImmediateOrderById(
    whichUnit: unit,
    order: integer
): boolean;

export declare function Jass_Native___IssuePointOrder(
    whichUnit: unit,
    order: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssuePointOrderLoc(
    whichUnit: unit,
    order: string,
    whichLocation: location
): boolean;

export declare function Jass_Native___IssuePointOrderById(
    whichUnit: unit,
    order: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssuePointOrderByIdLoc(
    whichUnit: unit,
    order: integer,
    whichLocation: location
): boolean;

export declare function Jass_Native___IssueTargetOrder(
    whichUnit: unit,
    order: string,
    target: widget
): boolean;

export declare function Jass_Native___IssueTargetOrderById(
    whichUnit: unit,
    order: integer,
    target: widget
): boolean;

export declare function Jass_Native___IssueInstantPointOrder(
    whichUnit: unit,
    order: string,
    x: real,
    y: real,
    target: widget
): boolean;

export declare function Jass_Native___IssueInstantPointOrderById(
    whichUnit: unit,
    order: integer,
    x: real,
    y: real,
    target: widget
): boolean;

export declare function Jass_Native___IssueInstantTargetOrder(
    whichUnit: unit,
    order: string,
    target: widget,
    instantTarget: widget
): boolean;

export declare function Jass_Native___IssueInstantTargetOrderById(
    whichUnit: unit,
    order: integer,
    target: widget,
    instantTarget: widget
): boolean;

export declare function Jass_Native___IssueBuildOrder(
    whichPeon: unit,
    unitToBuild: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssueBuildOrderById(
    whichPeon: unit,
    unitId: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssueNeutralImmediateOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string
): boolean;

export declare function Jass_Native___IssueNeutralImmediateOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer
): boolean;

export declare function Jass_Native___IssueNeutralPointOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssueNeutralPointOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native___IssueNeutralTargetOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    target: widget,
): boolean;

export declare function Jass_Native___IssueNeutralTargetOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    target: widget,
): boolean;

export declare function Jass_Native___GetUnitCurrentOrder(
    whichUnit: unit
): integer;

export declare function Jass_Native___SetResourceAmount(
    whichUnit: unit,
    amount: integer
): nothing;

export declare function Jass_Native___AddResourceAmount(
    whichUnit: unit,
    amount: integer
): nothing;

export declare function Jass_Native___GetResourceAmount(
    whichUnit: unit,
): integer;

export declare function Jass_Native___WaygateGetDestinationX(
    waygate: unit
): real;

export declare function Jass_Native___WaygateGetDestinationY(
    waygate: unit
): real;

export declare function Jass_Native___WaygateSetDestionation(
    waygate: unit,
    x: real,
    y: real
): nothing;

export declare function Jass_Native___WaygateActivate(
    waygate: unit,
    activate: boolean
): nothing;

export declare function Jass_Native___WaygateIsActive(
    waygate: unit,
): boolean;

export declare function Jass_Native___AddItemToAllStock(
    itemId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native___AddItemToStock(
    whichUnit: unit,
    itemId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native___AddUnitToAllStock(
    unitId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native___AddUnitToStock(
    whichUnit: unit,
    unitId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native___RemoveItemFromAllStock(
    itemId: integer
): nothing;

export declare function Jass_Native___RemoveItemFromStock(
    whichUnit: unit,
    itemId: integer
): nothing;

export declare function Jass_Native___RemoveUnitFromAllStock(
    unitId: integer
): nothing;

export declare function Jass_Native___RemoveUnitFromStock(
    whichUnit: unit,
    unitId: integer
): nothing;

export declare function Jass_Native___SetAllItemTypeSlots(
    solts: integer
): nothing;

export declare function Jass_Native___SetAllUnitTypeSlots(
    solts: integer
): nothing;

export declare function Jass_Native___SetItemTypeSlots(
    whichUnit: unit,
    slots: integer
): nothing;

export declare function Jass_Native___SetUnitTypeSlots(
    whichUnit: unit,
    slots: integer
): nothing;

export declare function Jass_Native___GetUnitUserData(
    whichUnit: unit,
): integer;

export declare function Jass_Native___SetUnitUserData(
    whichUnit: unit,
    data: integer
): nothing;


/*Player*/
export declare function Jass_Constant_Native___Player(
    number: integer
): player;

export declare function Jass_Constant_Native___GetLocalPlayer(): player;

export declare function Jass_Constant_Native___IsPlayerAlly(
    whichPlayer: player,
    otherPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsPlayerEnemy(
    whichPlayer: player,
    otherPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsPlayerInForce(
    whichPlayer: player,
    whichForce: force
): boolean ;

export declare function Jass_Constant_Native___IsVisibleToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsLocationVisibleToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsFoggedToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsLocationFoggedToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsMaskedToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___IsLocationMaskedToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native___GetPlayerRace(
    whichPlayer: player
): race;

export declare function Jass_Constant_Native___GetPlayerId(
    whichPlayer: player
): integer;

export declare function Jass_Constant_Native___GetPlayerUnitCount(
    whichPlayer: player,
    includeIncomplete: boolean
): integer;

export declare function Jass_Constant_Native___GetPlayerTypedUnitCount(
    whichPlayer: player,
    unitName: string,
    includeIncomplete: boolean,
    includeUpgrade: boolean
): integer;

export declare function Jass_Constant_Native___GetPlayerStructureCount(
    whichPlayer: player,
    includeIncomplete: boolean
): integer;

export declare function Jass_Constant_Native___GetPlayerState(
    whichPlayer: player,
    whichPlayerState: playerstate
): integer;

export declare function Jass_Constant_Native___GetPlayerScore(
    whichPlayer: player,
    whichPlayerScore: playerscore
): integer;

export declare function Jass_Constant_Native___GetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype
): boolean;

export declare function Jass_Constant_Native___GetPlayerHandicap(
    whichPlayer: player
): real;

export declare function Jass_Constant_Native___GetPlayerHandicapXp(
    whichPlayer: player
): real;

export declare function Jass_Constant_Native___SetPlayerHandicap(
    whichPlayer: player,
    handicap: real
): nothing;

export declare function Jass_Constant_Native___SetPlayerHandicapXp(
    whichPlayer: player,
    handicap: real
): nothing;


export declare function Jass_Constant_Native___SetPlayerTechMaxAllowed(
    whichPlayer: player,
    techid: integer,
    max: integer
): nothing;

export declare function Jass_Constant_Native___GetPlayerTechMaxAllowed(
    whichPlayer: player,
    techid: integer,
): integer;

export declare function Jass_Constant_Native___AddPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    levels: integer
): nothing;

export declare function Jass_Constant_Native___SetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    setToLevel: integer
): nothing;

export declare function Jass_Constant_Native___GetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): boolean;

export declare function Jass_Constant_Native___GetPlayerTechCount(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): integer;

export declare function Jass_Native___SetPlayerUnitsOwner(
    whichPlayer: player,
    newOwner: integer
): nothing;

export declare function Jass_Native___CripplePlayer(
    whichPlayer: player,
    toWhichPlayer: force,
    flag: boolean
): nothing;

export declare function Jass_Native___SetPlayerAbilityAvailable(
    whichPlayer: player,
    abilid: integer,
    avail: boolean
): nothing;

export declare function Jass_Native___SetPlayerState(
    whichPlayer: player,
    whichPlayerState: playerstate,
    value: integer
): nothing;

export declare function Jass_Native___RemovePlayer(
    whichPlayer: player,
    gameResult: playergameresult
): nothing;

export declare function Jass_Native___CachePlayerHeroData(
    whichPlayer: player
): nothing;

/*Fog*/

export declare function Jass_Native___SetFogStateRect(
    whichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native___SetFogStateRadius(
    whichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native___SetFogStateRadiusLoc(
    whichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native___FogMaskEnable(
    enable: boolean
): nothing;

export declare function Jass_Native___IsFogMaskEnabled(): boolean;

export declare function Jass_Native___FogEnable(
    enable: boolean
): nothing;

export declare function Jass_Native___IsFogEnabled(): boolean;

export declare function Jass_Native___CreateFogModifierRect(
    whichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native___CreateFogModifierRadius(
    whichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native___CreateFogModifierRadiusLoc(
    whichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native___DestroyFogModifier(
    whichFoModifier: fogmodifier
): nothing;

export declare function Jass_Native___FogModifierStart(
    whichFoModifier: fogmodifier
): nothing;

export declare function Jass_Native___FogModifierStop(
    whichFoModifier: fogmodifier
): nothing;

/*Game*/
export declare function Jass_Native___VersionGet(): version;

export declare function Jass_Native___VersionCompatible(
    whichVersion: version
): boolean;

export declare function Jass_Native___VersionSupported(
    whichVersion: version
): boolean;

export declare function Jass_Native___EndGame(
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native___ChangeLevel(
    newLevel: string,
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native___RestartGame(
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native___ReloadGame(): nothing;

export declare function Jass_Native___SetCampaignMenuRace(
    r: race
): nothing;

export declare function Jass_Native___SetCampaignMenuRaceEx(
    campaignIndex: integer
): nothing;

export declare function Jass_Native___ForceCampaignSelectScreen(): nothing;

export declare function Jass_Native___LoadGame(
    saveFileName: string,
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native___SaveGame(
    saveFileName: string
): nothing;

export declare function Jass_Native___RenameSaveDirectory(
    sourceDirName: string,
    destDirName: string
): boolean;

export declare function Jass_Native___RemoveSaveDirectory(
    sourceDirName: string
): boolean;

export declare function Jass_Native___CopySaveGame(
    sourceSaveName: string,
    destSaveName: string
): boolean;

export declare function Jass_Native___SaveGameExists(
    saveName: string
): boolean;

export declare function Jass_Native___SyncSelections(): nothing;

export declare function Jass_Native___SetFloatGameState(
    whichFloatGameState: fgamestate,
    value: real
): nothing;

export declare function Jass_Constant_Native___GetFloatGameState(
    whichFloatGameState: fgamestate,
): real;

export declare function Jass_Native___SetIntegerGameState(
    whichFloatGameState: fgamestate,
    value: integer
): nothing;

export declare function Jass_Constant_Native___GetIntegerGameState(
    whichFloatGameState: fgamestate,
): integer;

/*Campain*/
export declare function Jass_Native___SetTutorialCleared(
    cleared: boolean
): nothing;

export declare function Jass_Native___SetMissionAvailable(
    campaignNumber: integer,
    missionNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native___SetCampaignAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native___SetOpCinematicAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native___SetEdCinematicAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native___GetDefaultDifficulty(): gamedifficulty;

export declare function Jass_Native___SetDefaultDifficulty(
    g: gamedifficulty
): nothing;

export declare function Jass_Native___SetCustomCampaignButtonVisible(
    whichButton: integer,
    visible: boolean
): nothing;

export declare function Jass_Native___GetCustomCampaignButtonVisible(
    whichButton: integer
): boolean;

export declare function Jass_Native___DoNotSaveReply(): nothing;

/*Dialog*/
export declare function Jass_Native___DialogCreate(): dialog;

export declare function Jass_Native___DialogDestroy(
    whichDialog: dialog
): nothing;

export declare function Jass_Native___DialogClear(
    whichDialog: dialog
): nothing;

export declare function Jass_Native___DialogSetMessage(
    whichDialog: dialog,
    messageText: string
): nothing;

export declare function Jass_Native___DialogAddButton(
    whichDialog: dialog,
    buttonText: string,
    hotKey: integer
): button;

export declare function Jass_Native___DialogAddQuitButton(
    whichDialog: dialog,
    doScoreScreen: boolean,
    buttonText: string,
    hotKey: integer
): button;

export declare function Jass_Native___DialogDisplay(
    whichPlayer: player,
    whichDialog: dialog,
    flag: boolean
): nothing;

/*Cache*/
export declare function Jass_Native___ReloadGameCachesFromDisk(): boolean;

export declare function Jass_Native___InitGameCache(
    campaignFile: string
): gamecache;

export declare function Jass_Native___SaveGameCache(
    whichCache: gamecache
): boolean;

export declare function Jass_Native___StoreInteger(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: integer
): nothing;

export declare function Jass_Native___StoreReal(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: real
): nothing;

export declare function Jass_Native___StoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: boolean
): nothing;

export declare function Jass_Native___StoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: unit
): nothing;

export declare function Jass_Native___StoreString(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: string
): nothing;

export declare function Jass_Native___SyncStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___SyncStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___SyncStoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___SyncStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___SyncStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___HaveStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___HaveStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___HaveStoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___HaveStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___HaveStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___FlushGameCache(
    cache: gamecache
): nothing;

export declare function Jass_Native___FlushStoredMission(
    cache: gamecache,
    missionKey: string,
): nothing;

export declare function Jass_Native___FlushStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___FlushStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___FlushStoredBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___FlushStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native___FlushStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;


export declare function Jass_Native___GetStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): integer;

export declare function Jass_Native___GetStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): real;

export declare function Jass_Native___GetStoredBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native___GetStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): string;

export declare function Jass_Native___RestoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    whichPlayer: player,
    x: real,
    y: real,
    facing: real
): unit;

/*HashTable*/
export declare function Jass_Native___initHshTable(): hashtable;

export declare function Jass_Native___SaveInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: integer
): nothing;

export declare function Jass_Native___SaveReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: real
): nothing;

export declare function Jass_Native___SaveBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: boolean
): nothing;

export declare function Jass_Native___SaveStr(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: string
): nothing;

export declare function Jass_Native___SavePlayerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: player
): nothing;

export declare function Jass_Native___SaveWidgetHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: widget
): nothing;

export declare function Jass_Native___SaveDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: destructable
): nothing;

export declare function Jass_Native___SaveItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: item
): nothing;

export declare function Jass_Native___SaveUnitHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: unit
): nothing;

export declare function Jass_Native___SaveAbilityHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: ability
): nothing;

export declare function Jass_Native___SaveTimerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: timer
): nothing;

export declare function Jass_Native___SaveTriggerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: trigger
): nothing;

export declare function Jass_Native___SaveTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: triggercondition
): nothing;

export declare function Jass_Native___SaveTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: triggeraction
): nothing;

export declare function Jass_Native___SaveTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: event
): nothing;

export declare function Jass_Native___SaveForceHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: force
): nothing;

export declare function Jass_Native___SaveGroupHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: group
): nothing;

export declare function Jass_Native___SaveLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: location
): nothing;

export declare function Jass_Native___SaveRectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: rect
): nothing;

export declare function Jass_Native___SaveBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: boolexpr
): nothing;

export declare function Jass_Native___SaveSoundHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: sound
): nothing;

export declare function Jass_Native___SaveEffectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: effect
): nothing;

export declare function Jass_Native___SaveUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: unitpool
): nothing;

export declare function Jass_Native___SaveItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: itempool
): nothing;

export declare function Jass_Native___SaveQuestHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: quest
): nothing;

export declare function Jass_Native___SaveQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: questitem
): nothing;

export declare function Jass_Native___SaveDefeatConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: defeatcondition
): nothing;

export declare function Jass_Native___SaveTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: timerdialog
): nothing;

export declare function Jass_Native___SaveLeaderBoardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: leaderboard
): nothing;

export declare function Jass_Native___SaveMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: multiboard
): nothing;

export declare function Jass_Native___SaveMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: multiboarditem
): nothing;

export declare function Jass_Native___SaveTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: trackable
): nothing;

export declare function Jass_Native___SaveDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: dialog
): nothing;

export declare function Jass_Native___SaveButtonHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: button
): nothing;

export declare function Jass_Native___SaveTextTagHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: texttag
): nothing;

export declare function Jass_Native___SaveLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: lightning
): nothing;

export declare function Jass_Native___SaveImageHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: image
): nothing;

export declare function Jass_Native___SaveRegionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: region
): nothing;

export declare function Jass_Native___SaveFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: fogstate
): nothing;

export declare function Jass_Native___SaveFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: fogmodifier
): nothing;

export declare function Jass_Native___SaveAgentHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: agent
): nothing;

export declare function Jass_Native___SaveHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: hashtable
): nothing;


export declare function Jass_Native___LoadInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): integer;

export declare function Jass_Native___LoadReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): real;

export declare function Jass_Native___LoadBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___LoadStr(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): string;

export declare function Jass_Native___LoadPlayerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): player;

export declare function Jass_Native___LoadWidgetHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): widget;

export declare function Jass_Native___LoadDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): destructable;

export declare function Jass_Native___LoadItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): item;

export declare function Jass_Native___LoadUnitHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): unit;

export declare function Jass_Native___LoadAbilityHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): ability;

export declare function Jass_Native___LoadTimerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): timer;

export declare function Jass_Native___LoadTriggerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): trigger;

export declare function Jass_Native___LoadTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggercondition;

export declare function Jass_Native___LoadTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggeraction;

export declare function Jass_Native___LoadTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): event;

export declare function Jass_Native___LoadForceHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): force;

export declare function Jass_Native___LoadGroupHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): group;

export declare function Jass_Native___LoadLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): location;

export declare function Jass_Native___LoadIRectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): rect;

export declare function Jass_Native___LoadBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolexpr;

export declare function Jass_Native___LoadSoundHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): sound;

export declare function Jass_Native___LoadEffectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): effect;

export declare function Jass_Native___LoadUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): unitpool;

export declare function Jass_Native___LoadItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): itempool;

export declare function Jass_Native___LoadQuestHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): quest;

export declare function Jass_Native___LoadQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): questitem;

export declare function Jass_Native___LoadDefaultConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): defeatcondition;

export declare function Jass_Native___LoadTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): timerdialog;

export declare function Jass_Native___LoadLeaderBoardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): leaderboard;

export declare function Jass_Native___LoadMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboard;

export declare function Jass_Native___LoadMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboarditem;

export declare function Jass_Native___LoadTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): trackable;

export declare function Jass_Native___LoadDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): dialog;

export declare function Jass_Native___LoadButtonHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): button;

export declare function Jass_Native___LoadTextTagHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): texttag;

export declare function Jass_Native___LoadLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): lightning;

export declare function Jass_Native___LoadImageHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): image;

export declare function Jass_Native___LoadUbersplatHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): ubersplat;

export declare function Jass_Native___LoadRegionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): region;

export declare function Jass_Native___LoadFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogstate;

export declare function Jass_Native___LoadFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogmodifier;

export declare function Jass_Native___LoadHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): hashtable;

export declare function Jass_Native___HaveSavedInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___HaveSavedReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___HaveSavedBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___HaveSavedString(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___HaveSavedHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native___RemoveSavedInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native___RemoveSavedReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native___RemoveSavedBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native___RemoveSavedString(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native___RemoveSavedHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native___FlushParentHashTable(
    table: hashtable
): nothing;

export declare function Jass_Native___FlushChildHashTable(
    table: hashtable,
    parentKey: integer
): nothing;

/*Random*/
export declare function Jass_Native___GetRandomInt(
    low: integer,
    high: integer
): integer;

export declare function Jass_Native___GetRandomReal(
    low: real,
    high: real
): real;

/*Pool*/
export declare function Jass_Native___CreateUnitPool(): unitpool;

export declare function Jass_Native___DestroyUnitPool(
    whichPool: unitpool
): nothing;

export declare function Jass_Native___UnitPoolAddUnitType(
    whichPool: unitpool,
    unitId: integer,
    weight: real
): nothing;

export declare function Jass_Native___UnitPoolRemoveUnitType(
    whichPool: unitpool,
    unitId: integer,
): nothing;

export declare function Jass_Native___PlaceRandomUnit(
    whichPool: unitpool,
    whichPlayer: player,
    x: real,
    y: real,
    facing: real
): unit;

export declare function Jass_Native___CreateItemPool(): itempool;

export declare function Jass_Native___DestroyItemPool(
    whichItemPool: itempool
): nothing;

export declare function Jass_Native___ItemPoolAddItemType(
    whichPool: itempool,
    itemid: integer,
    weight: real
): nothing;

export declare function Jass_Native___ItemPoolRemoveItemType(
    whichPool: itempool,
    itemid: integer,
): nothing;

export declare function Jass_Native___PlaceRandomItem(
    whichPool: itempool,
    x: real,
    y: real,
): itempool;

export declare function Jass_Native___ChooseRandomCreep(
    level: integer
): integer;

export declare function Jass_Native___ChooseRandomNPBuilding(): integer;

export declare function Jass_Native___ChooseRandomItem(
    level: integer
): integer;

export declare function Jass_Native___ChooseRandomItemEx(
    whichType: itemtype,
    level: integer
): integer;

export declare function Jass_Native___SetRandomSeed(
    seed: integer
): nothing;

/*Visual*/
export declare function Jass_Native___SetTerrainFog(
    a: real,
    b: real,
    c: real,
    d: real,
    e: real
): nothing;

export declare function Jass_Native___ResetTerrainFog(): nothing;

export declare function Jass_Native___SetUnitFog(
    a: real,
    b: real,
    c: real,
    d: real,
    e: real
): nothing;

export declare function Jass_Native___SetTerrainFogEx(
    style: integer,
    zstart: real,
    zend: real,
    density: real,
    red: real,
    green: real,
    blue: real
): nothing;

export declare function Jass_Native___DisplayTextToPlayer(
    toPlayer: player,
    x: real,
    y: real,
    message: string
): nothing;

export declare function Jass_Native___DisplayTimedTextToPlayer(
    toPlayer: player,
    x: real,
    y: real,
    duration: real,
    message: string
): nothing;

export declare function Jass_Native___DisplayTimedTextFromPlayer(
    toPlayer: player,
    x: real,
    y: real,
    duration: real,
    message: string
): nothing;

export declare function Jass_Native___ClearTextMessages(): nothing;

export declare function Jass_Native___SetDayNightModels(
    terrainDNCFile: string,
    unitDNCFile: string,
): nothing;

export declare function Jass_Native___SetSkyModel(
    skyModelFile: string
): nothing;

export declare function Jass_Native___EnableUserControl(
    b: boolean
): nothing;

export declare function Jass_Native___EnableUserUI(
    b: boolean
): nothing;

export declare function Jass_Native___SuspendTimeOfDay(
    b: boolean
): nothing;

export declare function Jass_Native___SetTimeOfDayScale(
    r: real
): nothing;

export declare function Jass_Native___GetTimeOfDayScale(): real;

export declare function Jass_Native___ShowInterface(
    flag: boolean,
    fadeDuration: real
): nothing;

export declare function Jass_Native___PauseGame(
    flag: boolean
): nothing;

export declare function Jass_Native___UnitAddIndicator(
    whichUnit: unit,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___AddIndicator(
    whichWidget: widget,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___PingMinimap(
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native___PingMinimapEx(
    x: real,
    y: real,
    duration: real,
    read: integer,
    green: integer,
    blue: integer,
    extraEffects: boolean
): nothing;

export declare function Jass_Native___EnableOcclusion(
    flag: boolean
): nothing;

export declare function Jass_Native___SetIntroShotText(
    introText: string
): nothing;

export declare function Jass_Native___SetIntroShotModel(
    introModelPath: string
): nothing;

export declare function Jass_Native___EnableWorldFogBoundary(
    flag: boolean
): nothing;

export declare function Jass_Native___PlayModelCinematic(
    modelName: string
): nothing;

export declare function Jass_Native___PlayCinematic(
    movieName: string
): nothing;

export declare function Jass_Native___ForceUIKey(
    key: string
): nothing;

export declare function Jass_Native___ForceUICancel(): nothing;

export declare function Jass_Native___DisplayLoadDialog(): nothing;

export declare function Jass_Native___SetAltMinimapIcon(
    iconPath: string
): nothing;

export declare function Jass_Native___DisableRestartMission(
    flag: boolean
): nothing;

export declare function Jass_Native___CreateTextTag(): texttag;

export declare function Jass_Native___DestroyTextTag(
    t: texttag
): nothing;

export declare function Jass_Native___SetTextTagText(
    t: texttag,
    s: string,
    height: real
): nothing;

export declare function Jass_Native___SetTextTagPos(
    t: texttag,
    x: real,
    y: real,
    heightOffset: real
): nothing;

export declare function Jass_Native___SetTextTagPosUnit(
    t: texttag,
    whichUnit: unit,
    heightOffset: real
): nothing;

export declare function Jass_Native___SetTextTagColor(
    t: texttag,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___SetTextTagVelocity(
    t: texttag,
    xvuel: real,
    yvel: real
): nothing;

export declare function Jass_Native___SetTextTagVisibility(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native___SetTextTagSuspended(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native___SetTextTagPermanent(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native___SetTextTagAge(
    t: texttag,
    age: real
): nothing;

export declare function Jass_Native___SetTextTagLifeSpan(
    t: texttag,
    lifespan: real
): nothing;

export declare function Jass_Native___SetTextTagFadepoint(
    t: texttag,
    fadepoint: real
): nothing;

export declare function Jass_Native___SetReservedLocalHeroButtons(
    reserved: integer
): nothing;

export declare function Jass_Native___GetAllyColorFilterState(): integer;

export declare function Jass_Native___SetAllyColorFilterState(
    state: integer
): nothing;

export declare function Jass_Native___GetCreepCampFilterState(): boolean;

export declare function Jass_Native___SetCreepCampFilterState(
    state: boolean
): nothing;

export declare function Jass_Native___EnableMinimapFilterButtons(
    enableAlly: boolean,
    enableCreep: boolean
): nothing;

export declare function Jass_Native___EnableDragSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native___EnablePreSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native___EnableSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native___CreateTrackable(
    trackableModelPath: string,
    x: real,
    y: real,
    facing: real
): trackable;

export declare function Jass_Native___CreateQuest(): quest;

export declare function Jass_Native___DestroyQuest(
    whichQuest: quest
): nothing;

export declare function Jass_Native___QuestSetTitle(
    whichQuest: quest,
    title: string
): nothing;

export declare function Jass_Native___QuestSetDescription(
    whichQuest: quest,
    description: string
): nothing;

export declare function Jass_Native___QuestSetIconPath(
    whichQuest: quest,
    iconPath: string
): nothing;

export declare function Jass_Native___QuestSetRequired(
    whichQuest: quest,
    required: boolean
): nothing;

export declare function Jass_Native___QuestSetCompleted(
    whichQuest: quest,
    completed: boolean
): nothing;

export declare function Jass_Native___QuestSetDiscovered(
    whichQuest: quest,
    discovered: boolean
): nothing;

export declare function Jass_Native___QuestSetFailed(
    whichQuest: quest,
    failed: boolean
): nothing;

export declare function Jass_Native___QuestSetEnabled(
    whichQuest: quest,
    enabled: boolean
): nothing;

export declare function Jass_Native___IsQuestRequired(
    whichQuest: quest
): boolean;

export declare function Jass_Native___IsQuestCompleted(
    whichQuest: quest
): boolean;

export declare function Jass_Native___IsQuestDiscovered(
    whichQuest: quest
): boolean;

export declare function Jass_Native___IsQuestFailed(
    whichQuest: quest
): boolean;

export declare function Jass_Native___IsQuestEnabled(
    whichQuest: quest
): boolean;

export declare function Jass_Native___QuestCreateItem(
    whichQuest: quest,
): questitem;

export declare function Jass_Native___QuestItemSetDescription(
    whichQuestItem: questitem,
    description: string
): nothing;

export declare function Jass_Native___QuestItemSetCompleted(
    whichQuestItem: questitem,
    completed: boolean
): nothing;

export declare function Jass_Native___IsQuestItemCompleted(
    whichQuestItem: questitem
): boolean;

export declare function Jass_Native___CreateDefaultCondition(): defeatcondition;

export declare function Jass_Native___DestroyDefeatCondition(
    whichCondition: defeatcondition
): nothing;

export declare function Jass_Native___DefaultConditionSetDescription(
    whichCondition: defeatcondition,
    description: string
): nothing;

export declare function Jass_Native___CreateTimerDialog(
    t: timer
): timerdialog;

export declare function Jass_Native___DestroyTimerDialog(
    whichDialog: timerdialog
): nothing;

export declare function Jass_Native___TimerDialogSetTitle(
    whichDialog: timerdialog,
    title: string
): nothing;

export declare function Jass_Native___TimerDialogSetTitleColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___TimerDialogTimeColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___TimerDialogSetSpeed(
    whichDialog: timerdialog,
    speedMultFactor: real
): nothing;

export declare function Jass_Native___TimerDialogDisplay(
    whichDialog: timerdialog,
    display: boolean
): nothing;

export declare function Jass_Native___IsTimerDialogDisplayed(
    whichDialog: timerdialog
): boolean;

export declare function Jass_Native___TimerDialogSetRealTimeRemanining(
    whichDialog: timerdialog,
    timeRemanining: real
): nothing;

export declare function Jass_Native___CreateLeaderboard(): leaderboard;

export declare function Jass_Native___DestroyLeaderboard(
    lb: leaderboard
): nothing;

export declare function Jass_Native___LeaderboardGetItemCount(
    lb: leaderboard
): integer;

export declare function Jass_Native___LeaderboardSetSizeByItemCount(
    lb: leaderboard,
    count: integer
): nothing;

export declare function Jass_Native___LeaderboardAddItem(
    lb: leaderboard,
    label: string,
    value: integer,
    p: player
): nothing;

export declare function Jass_Native___LeaderboardRemoveItem(
    lb: leaderboard,
    index: integer
): nothing;

export declare function Jass_Native___LeaderboardRemovePlayerItem(
    lb: leaderboard,
    p: player
): nothing;

export declare function Jass_Native___LeaderboardClear(
    lb: leaderboard
): nothing;

export declare function Jass_Native___LeaderboardSortItemsByValue(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native___LeaderboardSortItemsByPlayer(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native___LeaderboardSortItemsByLabel(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native___LeaderboardHasPlayerItem(
    lb: leaderboard,
    p: player
): boolean;

export declare function Jass_Native___LeaderboardGetPlayerIndex(
    lb: leaderboard,
    p: player
): integer;

export declare function Jass_Native___LeaderboardSetLabel(
    lb: leaderboard,
    label: string
): nothing;

export declare function Jass_Native___LeaderboardGetLabelText(
    lb: leaderboard
): string;

export declare function Jass_Native___PlayerSetLeaderboard(
    toPlayer: player,
    lb: leaderboard
): nothing;

export declare function Jass_Native___PlayerGetLeaderboard(
    toPlayer: player
): leaderboard;

export declare function Jass_Native___LeaderboardSetLabelColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___LeaderboardSetValueColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___LeaderboardSetStyle(
    lb: leaderboard,
    showLabel: boolean,
    showNames: boolean,
    showValues: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native___LeaderboardSetItemValue(
    lb: leaderboard,
    whichItem: integer,
    val: integer
): nothing;

export declare function Jass_Native___LeaderboardSetItemLable(
    lb: integer,
    whichItem: integer,
    val: string
): nothing;

export declare function Jass_Native___LeaderSetItemStyle(
    lb: integer,
    whichItem: integer,
    showLable: boolean,
    showValue: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native___LeaderboardSetItemLableColor(
    lb: integer,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___LeaderboardSetItemValueColor(
    lb: integer,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___CreateMultiboard(): multiboard;

export declare function Jass_Native___DestroyMultiboard(
    lb: multiboard
): nothing;

export declare function Jass_Native___MultiboardDisplay(
    lb: multiboard,
    show: boolean
): nothing;

export declare function Jass_Native___IsMultiboardDisplayed(
    lb: multiboard
): boolean;

export declare function Jass_Native___MultiboardMinimize(
    lb: multiboard,
    minisize: boolean
): nothing;

export declare function Jass_Native___IsMultiboardDisplayed(
    lb: multiboard
): boolean;

export declare function Jass_Native___MultiboardClear(
    lb: multiboard
): nothing;

export declare function Jass_Native___MultiboardSetTitleText(
    lb: multiboard,
    label: string
): nothing;

export declare function Jass_Native___MultiboardGetTitleText(
    lb: multiboard
): string;

export declare function Jass_Native___MultiboardSetTitleTextColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___MultiboardGetRowCount(
    lb: multiboard
): integer;

export declare function Jass_Native___MultiboardGetColumnCount(
    lb: multiboard
): integer;

export declare function Jass_Native___MultiboardSetItemStyle(
    lb: multiboard,
    showValues: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native___MultiboardSetItemValue(
    lb: multiboard,
    value: string
): nothing;

export declare function Jass_Native___MultiboardSetValueColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___MultiboardSetItemsWidth(
    lb: multiboard,
    width: real
): nothing;

export declare function Jass_Native___MultiboardSetItemIcon(
    lb: multiboard,
    iconPath: string
): nothing;

export declare function Jass_Native___MultiboardGetItem(
    lb: multiboard,
    row: integer,
    column: integer
): multiboarditem;

export declare function Jass_Native___MultiboardReleaseItem(
    mbi: multiboarditem
): nothing;

export declare function Jass_Native___MultiboardSetItemStyle(
    mbi: multiboarditem,
    showValue: boolean,
    showIcon: boolean
): nothing;

export declare function Jass_Native___MultiboardSetItemValue(
    mbi: multiboarditem,
    val: string
): nothing;

export declare function Jass_Native___MultiboardSetItemValueColor(
    mbi: multiboarditem,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___MultiboardSetItemWidth(
    mbi: multiboarditem,
    width: real
): nothing;

export declare function Jass_Native___MultiboardSetItemIcon(
    mbi: multiboarditem,
    iconFileName: string
): nothing;

export declare function Jass_Native___MultiboardSuppressDisplay(
    flag: boolean
): nothing;

/*Camera*/
export declare function Jass_Native___SetCameraPosition(
    x: real,
    y: real
): nothing;

export declare function Jass_Native___SetCameraQuickPosition(
    x: real,
    y: real
): nothing;

export declare function Jass_Native___SetCameraBounds(
    x1: real,
    y1: real,
    x2: real,
    y2: real,
    x3: real,
    y3: real,
    x4: real,
    y5: real
): nothing;

export declare function Jass_Native___StopCamera(): nothing;

export declare function Jass_Native___ResetToGameCamera(
    duration: real
): nothing;

export declare function Jass_Native___PanCameraTo(
    x: real,
    y: real
): nothing;

export declare function Jass_Native___PanCameraToTimed(
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native___PanCameraToTimedWithZ(
    x: real,
    y: real,
    zOffsetDest: real
): nothing;

export declare function Jass_Native___SetCinematicCamera(
    cameraModelFile: string
): nothing;

export declare function Jass_Native___SetCameraRotateMode(
    x: real,
    y: real,
    radiansToSweep: real,
    duration: real
): nothing;

export declare function Jass_Native___SetCameraField(
    whichField: camerafield,
    value: real,
    duration: real
): nothing;

export declare function Jass_Native___AdjustCameraField(
    whichField: camerafield,
    offset: real,
    duration: real
): nothing;

export declare function Jass_Native___SetCameraTargetController(
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
    orientation: boolean
): nothing;

export declare function Jass_Native___SetCameraOrientController(
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
): nothing;

export declare function Jass_Native___CreateCameraSetup(): camerasetup;

export declare function Jass_Native___CameraSetupSetField(
    whichSetup: camerasetup,
    whichField: camerafield,
    value: real,
    duration: real
): nothing;

export declare function Jass_Native___CameraSetupGetField(
    whichSetup: camerasetup,
    whichField: camerafield
): real;

export declare function Jass_Native___CameraSetupSetDestPosition(
    whichSetup: camerasetup,
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native___CameraGetupGetDestPositionLoc(
    whichSetup: camerasetup,
): location;

export declare function Jass_Native___CameraGetDestPositionX(
    whichSetup: camerasetup,
): real;

export declare function Jass_Native___CameraSetupGetDestPositionY(
    whichSetup: camerasetup,
): real;

export declare function Jass_Native___CameraSetupApply(
    whichSetup: camerasetup,
    doPan: boolean,
    panTimed: boolean
): nothing;

export declare function Jass_Native___CameraSetupApplyWithZ(
    whichSetup: camerasetup,
    zDestOffset: real
): nothing;

export declare function Jass_Native___CameraSetupApplyForceDuration(
    whichSetup: camerasetup,
    doPan: boolean,
    forceDuration: real
): nothing;

export declare function Jass_Native___CameraSetupApplyForceDurationWithZ(
    whichSetup: camerasetup,
    zDestOffset: real,
    forceDuration: real
): nothing;

export declare function Jass_Native___CameraSetTargetNoise(
    mag: real,
    velocity: real
): nothing;

export declare function Jass_Native___CameraSetSourceNoise(
    mag: real,
    velocity: real
): nothing;

export declare function Jass_Native___CameraSetTargetNoiseEx(
    mag: real,
    velocity: real,
    vertOnly: boolean
): nothing;

export declare function Jass_Native___CameraSetSourceNoiseEx(
    real: mag,
    velocity: real,
    vertOnly: boolean
): nothing;

export declare function Jass_Native___CameraSetSmoothingFactor(
    factor: real
): nothing;

export declare function Jass_Native___SetCineFilterTexture(
    filename: string
): nothing;

export declare function Jass_Native___SetCineFilterBlendMode(
    whichMode: blendmode
): nothing;

export declare function Jass_Native___SetCineFilterTexMapFlags(
    whichFlags: texmapflags
): nothing;

export declare function Jass_Native___SetCineFilterStartUV(
    minu: real,
    minv: real,
    maxu: real,
    maxv: real
): nothing;

export declare function Jass_Native___SetCineFilterEndUV(
    minu: real,
    minv: real,
    maxu: real,
    maxv: real
): nothing;

export declare function Jass_Native___SetCineFilterStartColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___SetCineFilterEndColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___SetCineFilterDuration(
    duration: real,
): nothing;


export declare function Jass_Native___DisplayCineFilter(
    flag: boolean
): nothing;

export declare function Jass_Native___IsCineFilterDisplayed(): boolean;

export declare function Jass_Native___SetCinematicScene(
    portraitUnitId: integer,
    color: playercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: real,
    voiceoverDuration: real
): nothing;

export declare function Jass_Native___EndCinematicScene(): nothing;

export declare function Jass_Native___ForceCinematicSubtitles(
    flag: boolean
): nothing;

export declare function Jass_Native___GetCameraMargin(
    whichMargin: integer
): real;

export declare function Jass_Constant_Native___GetCameraBoundMinX(): real;

export declare function Jass_Constant_Native___GetCameraBoundMinY(): real;

export declare function Jass_Constant_Native___GetCameraBoundMaxX(): real;

export declare function Jass_Constant_Native___GetCameraBoundMaxY(): real;

export declare function Jass_Constant_Native___GetCameraField(
    whichField: camerafield
): real;

export declare function Jass_Constant_Native___GetCameraTargetPositionX(): real;

export declare function Jass_Constant_Native___GetCameraTargetPositionY(): real;
export declare function Jass_Constant_Native___GetCameraTargetPositionY(): real;

export declare function Jass_Constant_Native___GetCameraTargetPositionLoc(): location;

export declare function Jass_Constant_Native___GetCameraEyePositionX(): real;

export declare function Jass_Constant_Native___GetCameraEyePositionY(): real;

export declare function Jass_Constant_Native___GetCameraEyePositionZ(): real;

export declare function Jass_Constant_Native___GetCameraEyePositionLoc(): location;

/*Sound*/
export declare function Jass_Native___NewSoundEnvironment(
    environmentName: string
): nothing;

export declare function Jass_Native___CreateSound(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    eaxSetting: string
): sound;

export declare function Jass_Native___CreateSoundFilenameWithLabel(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    SLKEntryName: string
): sound;

export declare function Jass_Native___CreateSoundFromLabel(
    soundLabel: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
): sound;

export declare function Jass_Native___CreateMIDISound(
    soundLabel: string,
    looping: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
): sound;

export declare function Jass_Native___SetSoundParamsFromLabel(
    soundHandle: sound,
    soundLabel: string
): nothing;

export declare function Jass_Native___SetSoundDistanceCutoff(
    soundHandle: sound,
    cutoff: real
): nothing;

export declare function Jass_Native___SetSoundChannel(
    soundHandle: sound,
    channel: integer
): nothing;

export declare function Jass_Native___SetSoundVolume(
    soundHandle: sound,
    volume: integer
): nothing;

export declare function Jass_Native___SetSoundPitch(
    soundHandle: sound,
    pitch: real
): nothing;

export declare function Jass_Native___SetSoundPlayPosition(
    soundHandle: sound,
    millisecs: integer
): nothing;

export declare function Jass_Native___SetSoundDistances(
    soundHandle: sound,
    minDist: real,
    maxDist: real
): nothing;

export declare function Jass_Native___SetSoundConeAngles(
    soundHandle: sound,
    inside: real,
    outside: real,
    outsideVolume: integer
): nothing;

export declare function Jass_Native___SetSoundConeOrientation(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native___SetSoundPosition(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native___SetSoundVelocity(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native___AttachSoundToUnit(
    soundHandle: sound,
    whichUnit: unit
): nothing;

export declare function Jass_Native___StartSound(
    soundHandle: sound
): nothing;

export declare function Jass_Native___StopSound(
    soundHandle: sound,
    killWhenDone: boolean,
    fadeOut: boolean
): nothing;

export declare function Jass_Native___KillSoundWhenDone(): nothing;

export declare function Jass_Native___SetMapMusic(
    musicName: string,
    random: boolean,
    index: integer
): nothing;

export declare function Jass_Native___ClearMapMusic(): nothing;

export declare function Jass_Native___PlayMusic(
    musicName: string
): nothing;

export declare function Jass_Native___PlayMusicEx(
    musicName: string,
    frommsecs: integer,
    fadeinmsecs: integer
): nothing;

export declare function Jass_Native___StopMusic(
    fadeOut: boolean
): nothing;

export declare function Jass_Native___ResumeMusic(): nothing;

export declare function Jass_Native___PlayThematicMusic(
    musicFileName: string
): nothing;

export declare function Jass_Native___PlayThematicMusicEx(
    musicFileName: string,
    frommsecs: integer
): nothing;

export declare function Jass_Native___EndThematicMusic(): nothing;

export declare function Jass_Native___SetMusicVolume(
    volume: integer
): nothing;

export declare function Jass_Native___SetMusicPlayPosition(
    millisecs: integer
): nothing;

export declare function Jass_Native___SetThematicMusicPlayerPosition(
    millisecs: integer
): nothing;

export declare function Jass_Native___SetSoundDuration(
    soundHandle: sound,
    duration: integer
): nothing;

export declare function Jass_Native___GetSoundDuration(
    soundHandle: sound
): integer;

export declare function Jass_Native___GetSoundFileDuration(
    musicFileName: string
): integer;

export declare function Jass_Native___VolumeGroupSetVolume(
    vgroup: volumegroup,
    scale: real
): nothing;

export declare function Jass_Native___VolumeGroupReset(): nothing;

export declare function Jass_Native___GetSoundIsPlaying(
    soundHandle: sound
): boolean;

export declare function Jass_Native___GetSoundIsLoading(
    soundHandle: sound
): boolean;

export declare function Jass_Native___RegisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectWidth: real,
    rectHeight: real
): nothing;

export declare function Jass_Native___UnregisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectWidth: real,
    rectHeight: real
): nothing;

export declare function Jass_Native___AddWeatherEffect(
    where: rect,
    effectId: integer
): weathereffect;

export declare function Jass_Native___RemoveWeatherEffect(
    whichEffect: weathereffect
): nothing;

export declare function Jass_Native___EnableWeatherEffect(
    whichEffect: weathereffect,
    enable: boolean
): nothing;

export declare function Jass_Native___TerrainDeformCrater(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    permanent: boolean
): terraindeformation;

export declare function Jass_Native___TerrainDeformRipple(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    count: integer,
    spaceWaves: real,
    timeWaves: real,
    radiusStartPct: real,
    limitNeg: boolean
): terraindeformation;

export declare function Jass_Native___TerrainDeformWave(
    x: real,
    y: real,
    dirX: real,
    dirY: real,
    distance: real,
    speed: real,
    radius: real,
    depth: real,
    trailTime: integer,
    count: integer
): terraindeformation;

export declare function Jass_Native___TerrainDeformRandom(
    x: real,
    y: real,
    radius: real,
    minDelta: real,
);

export declare function Jass_Native___TerrainDeformStop(
    deformation: terraindeformation,
    duration: integer
): nothing;

export declare function Jass_Native___TerrainDeformStopAll(): nothing;

export declare function Jass_Native___AddSpecialEffect(
    modelName: string,
    x: real,
    y: real
): effect;

export declare function Jass_Native___AddSpecialEffectLoc(
    modelName: string,
    where: locaiton
): effect;

export declare function Jass_Native___AddSpecialEffectTarget(
    modelName: string,
    target: widget,
    attchPointName: string
): effect;

export declare function Jass_Native___DestroyEffect(
    whichEffect: effect
): nothing;

export declare function Jass_Native___AddSpellEffect(
    abilityString: string,
    t: effectype,
    x: real,
    y: real
): effect;

export declare function Jass_Native___AddSpellEffectLoc(
    abilityString: string,
    t: effectype,
    where: location
): effect;

export declare function Jass_Native___AddSpellEffectById(
    abilityId: integer,
    t: effectype,
    x: real,
    y: real
): effect;

export declare function Jass_Native___AddSpellEffectByIdLoc(
    abilityId: integer,
    t: effectype,
    where: location
): effect;

export declare function Jass_Native___AddSpellEffectTarget(
    modleName: string,
    t: effectype,
    target: widget,
    attachPoint: string
): effect;

export declare function Jass_Native___AddSpellEffectTargetById(
    abilityId: integer,
    t: effectype,
    target: widget,
    attachPoint: string
): effect;

export declare function Jass_Native___AddLightning(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real,
): lightning;

export declare function Jass_Native___AddLightningEx(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real,
): lightning;

export declare function Jass_Native___DestroyLightning(
    whichBolt: lightning
): boolean;

export declare function Jass_Native___MoveLightning(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real,
): boolean;

export declare function Jass_Native___MoveLightningEx(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real,
): boolean;

export declare function Jass_Native___GetLightningColorA(
    whichBolt: lightning,
): real;

export declare function Jass_Native___GetLightningColorR(
    whichBolt: lightning,
): real;

export declare function Jass_Native___GetLightningColorG(
    whichBolt: lightning,
): real;

export declare function Jass_Native___GetLightningColorB(
    whichBolt: lightning,
): real;

export declare function Jass_Native___SetLightningColor(
    whichBolt: lightning,
    r: real,
    g: real,
    b: real,
    a: real,
): boolean;

export declare function Jass_Native___GetAbilityEffect(
    abilityString: string,
    t: effectype,
    index: integer
): string;

export declare function Jass_Native___GetAbilityEffectById(
    abilityId: integer,
    t: effectype,
    index: integer
): string;

export declare function Jass_Native___GetAbilitySound(
    abilityString: string,
    t: soundtype
): string;

export declare function Jass_Native___GetAbilitySoundById(
    abilityId: integer,
    t: soundtype
): string;

/*Terrain*/
export declare function Jass_Native___GetTerrainCliffLevel(
    x: real,
    y: real
): integer;

export declare function Jass_Native___SetWaterBaseColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native___SetWaterDeforms(
    val: boolean
): nothing;

export declare function Jass_Native___GetTerrainType(
    x: real,
    y: real
): integer;

export declare function Jass_Native___GetTerrainVariance(
    x: real,
    y: real
): integer;

export declare function Jass_Native___SetTerrainType(
    x: real,
    y: real,
    terrainType: integer,
    variation: integer,
    area: integer,
    shape: integer
): nothing;


export declare function Jass_Native___IsTerrainPathable(
    x: real,
    y: real,
    t: pathingtype
): boolean;

export declare function Jass_Native___SetTerrainPathable(
    x: real,
    y: real,
    t: pathingtype,
    flag: boolean
): nothing;

/*Image*/
export declare function Jass_Native___CreateImage(
    file: string,
    sizeX: real,
    sizeY: real,
    sizeZ: real,
    posX: real,
    posY: real,
    posZ: real,
    originX: real,
    originY: real,
    originZ: real,
    imageType: integer
): image;

export declare function Jass_Native___DestroyImage(
    whichImage: image
): nothing;

export declare function Jass_Native___ShowImage(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native___SetImageConstantHeight(
    whichImage: image,
    flag: boolean,
    height: real
): nothing;

export declare function Jass_Native___SetImagePosition(
    whichImage: image,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native___SetImageColor(
    whichImage: image,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer,
): nothing;

export declare function Jass_Native___SetImageRender(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native___SetImageRenderAlways(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native___SetImageAboveWater(
    whichImage: image,
    flag: boolean,
    userWaterAlpha: boolean
): nothing;

export declare function Jass_Native___SetImageType(
    whichImage: image,
    imageType: integer
): nothing;

/*Ubersplat*/
export declare function Jass_Native___CreateUbersplat(
    x: real,
    y: real,
    name: string,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer,
    forcePaused: boolean,
    onBirthTime: boolean
): ubersplat;

export declare function Jass_Native___DestroyUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native___ResetUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native___FinishUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native___ShowUbersplat(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

export declare function Jass_Native___SetUbersplatRender(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

export declare function Jass_Native___SetUbersplatRenderAlways(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

/*Blight*/
export declare function Jass_Native___SetBlight(
    whichPlayer: player,
    x: real,
    y: real,
    radius: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native___SetBlightRect(
    whichPlayer: player,
    r: rect,
    radius: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native___SetBlightPoint(
    whichPlayer: player,
    x: real,
    y: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native___SetBlightLoc(
    whichPlayer: player,
    whichLocation: location,
    radius: real,
    addBlight: boolean
): unit;

export declare function Jass_Native___CreateBlightedGoldmine(
    id: player,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native___IsPointBlighted(
    x: real,
    y: real
): boolean;

/*Doodad*/
export declare function Jass_Native___SetDoodadAnimation(
    x: real,
    y: real,
    radius: real,
    doodadID: integer,
    nearestOnly: boolean,
    animName: string,
    animRandom: boolean
): nothing;

export declare function Jass_Native___SetDoodadAnimationRect(
    r: rect,
    doodadID: integer,
    animName: string,
    animRandom: boolean
): nothing;

/*Computer*/
export declare function Jass_Native___StartMelleAI(
    num: player,
    script: string
): nothing;

export declare function Jass_Native___StartCampaignAI(
    num: player,
    script: string
): nothing;

export declare function Jass_Native___CommandAI(
    num: player,
    command: integer,
    data: integer
): nothing;

export declare function Jass_Native___PauseCompAI(
    p: player,
    pause: boolean
): nothing;

export declare function Jass_Native___GetAIDifficulty(
    num: player
): aidifficulty;

export declare function Jass_Native___RemoveGuardPosition(
    hUnit: unit
): nothing;

export declare function Jass_Native___RecycleGuardPosition(
    hUnit: unit
): nothing;

export declare function Jass_Native___RemoveAllGuardPositions(
    num: player
): nothing;

export declare function Jass_Native___Cheat(
    cheatStr: string
): nothing;

export declare function Jass_Native___IsNoVictoryCheat(): boolean;

export declare function Jass_Native___IsNoDefeatCheat(): boolean;

export declare function Jass_Native___Preload(
    filename: string
): nothing;

export declare function Jass_Native___PreloadEnd(
    timeout: real
): nothing;

export declare function Jass_Native___PreloadStart(): nothing;

export declare function Jass_Native___PreloadRefresh(): nothing;

export declare function Jass_Native___PreloadEndEx(): nothing;

export declare function Jass_Native___PreloadGenClear(): nothing;

export declare function Jass_Native___PreloadGenStart(): nothing;

export declare function Jass_Native___PreloadGenEnd(
    filename: string
): nothing;

export declare function Jass_Native___Preloader(
    filename: string
): nothing;











