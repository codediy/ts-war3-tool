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

export declare function Jass_Constant_Native_ConvertRace(i: integer): race

export declare function Jass_Constant_Native_ConvertAllianceType(i: integer): alliancetype;

export declare function Jass_Constant_Native_ConvertRacePref(i: integer): racepreference;

export declare function Jass_Constant_Native_ConvertIGameState(i: integer): igamestate;

export declare function Jass_Constant_Native_ConvertFGameState(i: integer): fgamestate;

export declare function Jass_Constant_Native_ConvertPlayerState(i: integer): playerstate;

export declare function Jass_Constant_Native_ConvertPlayerScore(i: integer): playerscore;

export declare function Jass_Constant_Native_ConvertPlayerGameResult(i: integer): playergameresult;

export declare function Jass_Constant_Native_ConvertUnitState(i: integer): unitstate;

export declare function Jass_Constant_Native_ConvertAIDifficulty(i: integer): aidifficulty;

export declare function Jass_Constant_Native_ConvertGameEvent(i: integer): gameevent;

export declare function Jass_Constant_Native_ConvertPlayerEvent(i: integer): playerevent;

export declare function Jass_Constant_Native_ConvertPlayerUnitEvent(i: integer): playerunitevent;

export declare function Jass_Constant_Native_ConvertWidgetEvent(i: integer): widgetevent;

export declare function Jass_Constant_Native_ConvertDialogEvent(i: integer): dialogevent;

export declare function Jass_Constant_Native_ConvertUnitEvent(i: integer): unitevent;

export declare function Jass_Constant_Native_ConvertLimitOp(i: integer): limitop;

export declare function Jass_Constant_Native_ConvertUnitType(i: integer): unittype;

export declare function Jass_Constant_Native_ConvertGameSpeed(i: integer): gamespeed;

export declare function Jass_Constant_Native_ConvertPlacement(i: integer): placement;

export declare function Jass_Constant_Native_ConvertStartLocPrio(i: integer): startlocprio;

export declare function Jass_Constant_Native_ConvertGameDifficulty(i: integer): gamedifficulty;

export declare function Jass_Constant_Native_ConvertGameType(i: integer): gametype;

export declare function Jass_Constant_Native_ConvertMapFlag(i: integer): mapflag;

export declare function Jass_Constant_Native_ConvertMapVisibility(i: integer): mapvisibility;

export declare function Jass_Constant_Native_ConvertMapSetting(i: integer): mapsetting;

export declare function Jass_Constant_Native_ConvertMapDensity(i: integer): mapdensity;

export declare function Jass_Constant_Native_ConvertMapControl(i: integer): mapcontrol;

export declare function Jass_Constant_Native_ConvertPlayerColor(i: integer): playercolor;

export declare function Jass_Constant_Native_ConvertPlayerSlotState(i: integer): playerslotstate;

export declare function Jass_Constant_Native_ConvertVolumeGroup(i: integer): volumegroup;

export declare function Jass_Constant_Native_ConvertCameraField(i: integer): camerafield;

export declare function Jass_Constant_Native_ConvertBlendMode(i: integer): blendmode;

export declare function Jass_Constant_Native_ConvertRarityControl(i: integer): raritycontrol;

export declare function Jass_Constant_Native_ConvertTexMapFlags(i: integer): texmapflags;

export declare function Jass_Constant_Native_ConvertFogState(i: integer): fogstate;

export declare function Jass_Constant_Native_ConvertEffectType(i: integer): effectype;

export declare function Jass_Constant_Native_ConvertVersion(i: integer): version;

export declare function Jass_Constant_Native_ConvertItemType(i: integer): itemtype;

export declare function Jass_Constant_Native_ConvertAttackType(i: integer): attacktype;

export declare function Jass_Constant_Native_ConvertDamageType(i: integer): damagetype;

export declare function Jass_Constant_Native_ConvertWeaponType(i: integer): weapontype;

export declare function Jass_Constant_Native_ConvertSoundType(i: integer): soundtype;

export declare function Jass_Constant_Native_ConvertPathingType(i: integer): pathingtype;

export declare function Jass_Constant_Native_OrderId(orderIdString: string): integer;

export declare function Jass_Constant_Native_OrderId2String(orderId: integer): string;

export declare function Jass_Constant_Native_UnitId(unitIdString: string): integer;

export declare function Jass_Constant_Native_UnitId2String(unitId: integer): string;

export declare function Jass_Constant_Native_AbilityId(abilityIdString: string): integer;

export declare function Jass_Constant_Native_AbilityId2String(abilityId: integer): string;

export declare function Jass_Constant_Native_GetObjectName(objectId: integer): string;


export const FALSE = false;
export const TRUE = true;
export const JASS_MAX_ARRAY_SIZE = 8192;
export const PLAYER_NEUTRAL_PASSIVE = 15;
export const PLAYER_NEUTRAL_AGGRESSIVE = 12;

/*PlayerColor*/
export const PLAYER_COLOR_RED = Jass_Constant_Native_ConvertPlayerColor(0);
export const PLAYER_COLOR_BLUE = Jass_Constant_Native_ConvertPlayerColor(1);
export const PLAYER_COLOR_CYAN = Jass_Constant_Native_ConvertPlayerColor(2);
export const PLAYER_COLOR_PURPLE = Jass_Constant_Native_ConvertPlayerColor(3);
export const PLAYER_COLOR_YELLOW = Jass_Constant_Native_ConvertPlayerColor(4);
export const PLAYER_COLOR_ORANGE = Jass_Constant_Native_ConvertPlayerColor(5);
export const PLAYER_COLOR_GREEN = Jass_Constant_Native_ConvertPlayerColor(6);
export const PLAYER_COLOR_PINK = Jass_Constant_Native_ConvertPlayerColor(7);
export const PLAYER_COLOR_LIGHT_GRAY = Jass_Constant_Native_ConvertPlayerColor(8);
export const PLAYER_COLOR_LIGHT_BLUE = Jass_Constant_Native_ConvertPlayerColor(9);
export const PLAYER_COLOR_AQUA = Jass_Constant_Native_ConvertPlayerColor(10);
export const PLAYER_COLOR_BROWN = Jass_Constant_Native_ConvertPlayerColor(11);

/*Race*/
export const RACE_HUMAN = Jass_Constant_Native_ConvertRace(1);
export const RACE_ORC = Jass_Constant_Native_ConvertRace(2);
export const RACE_UNDEAD = Jass_Constant_Native_ConvertRace(3);
export const RACE_NIGHTELF = Jass_Constant_Native_ConvertRace(4);
export const RACE_DEMON = Jass_Constant_Native_ConvertRace(5);
export const RACE_OTHER = Jass_Constant_Native_ConvertRace(7);

/*GameResult*/
export const PLAYER_GAME_RESULT_VICTORY = Jass_Constant_Native_ConvertPlayerGameResult(0);
export const PLAYER_GAME_RESULT_DEFEAT = Jass_Constant_Native_ConvertPlayerGameResult(1);
export const PLAYER_GAME_RESULT_TIE = Jass_Constant_Native_ConvertPlayerGameResult(2);
export const PLAYER_GAME_RESULT_NEUTRAL = Jass_Constant_Native_ConvertPlayerGameResult(3);

export const ALLIANCE_PASSIVE = Jass_Constant_Native_ConvertAllianceType(0);
export const ALLIANCE_HELP_REQUEST = Jass_Constant_Native_ConvertAllianceType(1);
export const ALLIANCE_HELP_RESPONSE = Jass_Constant_Native_ConvertAllianceType(2);
export const ALLIANCE_SHARED_XP = Jass_Constant_Native_ConvertAllianceType(3);
export const ALLIANCE_SHARED_SPELLS = Jass_Constant_Native_ConvertAllianceType(4);
export const ALLIANCE_SHARED_VISION = Jass_Constant_Native_ConvertAllianceType(5);
export const ALLIANCE_SHARED_CONTROL = Jass_Constant_Native_ConvertAllianceType(6);
export const ALLIANCE_SHARED_ADVANCED_CONTROL = Jass_Constant_Native_ConvertAllianceType(7);
export const ALLIANCE_RESCUABLE = Jass_Constant_Native_ConvertAllianceType(8);
export const ALLIANCE_SHARED_VISION_FORCED = Jass_Constant_Native_ConvertAllianceType(9);


export const VERSION_REIGN_OF_CHAOS = Jass_Constant_Native_ConvertVersion(0);
export const VERSION_FROZEN_THRONE = Jass_Constant_Native_ConvertVersion(1);

export const ATTACK_TYPE_NORMAL = Jass_Constant_Native_ConvertAttackType(0);
export const ATTACK_TYPE_MELEE = Jass_Constant_Native_ConvertAttackType(1);
export const ATTACK_TYPE_PIERCE = Jass_Constant_Native_ConvertAttackType(2);
export const ATTACK_TYPE_SIEGE = Jass_Constant_Native_ConvertAttackType(3);
export const ATTACK_TYPE_MAGIC = Jass_Constant_Native_ConvertAttackType(4);
export const ATTACK_TYPE_CHAOS = Jass_Constant_Native_ConvertAttackType(5);
export const ATTACK_TYPE_HERO = Jass_Constant_Native_ConvertAttackType(6);

export const DAMAGE_TYPE_UNKNOWN = Jass_Constant_Native_ConvertDamageType(0);
export const DAMAGE_TYPE_NORMAL = Jass_Constant_Native_ConvertDamageType(4);
export const DAMAGE_TYPE_ENHANCED = Jass_Constant_Native_ConvertDamageType(5);
export const DAMAGE_TYPE_FIRE = Jass_Constant_Native_ConvertDamageType(8);
export const DAMAGE_TYPE_COLD = Jass_Constant_Native_ConvertDamageType(9);
export const DAMAGE_TYPE_LIGHTNING = Jass_Constant_Native_ConvertDamageType(10);
export const DAMAGE_TYPE_POISON = Jass_Constant_Native_ConvertDamageType(11);
export const DAMAGE_TYPE_DISEASE = Jass_Constant_Native_ConvertDamageType(12);
export const DAMAGE_TYPE_DIVINE = Jass_Constant_Native_ConvertDamageType(13);
export const DAMAGE_TYPE_MAGIC = Jass_Constant_Native_ConvertDamageType(14);
export const DAMAGE_TYPE_SONIC = Jass_Constant_Native_ConvertDamageType(15);
export const DAMAGE_TYPE_ACID = Jass_Constant_Native_ConvertDamageType(16);
export const DAMAGE_TYPE_FORCE = Jass_Constant_Native_ConvertDamageType(17);
export const DAMAGE_TYPE_DEATH = Jass_Constant_Native_ConvertDamageType(18);
export const DAMAGE_TYPE_MIND = Jass_Constant_Native_ConvertDamageType(19);
export const DAMAGE_TYPE_PLANT = Jass_Constant_Native_ConvertDamageType(20);
export const DAMAGE_TYPE_DEFENSIVE = Jass_Constant_Native_ConvertDamageType(21);
export const DAMAGE_TYPE_DEMOLITION = Jass_Constant_Native_ConvertDamageType(22);
export const DAMAGE_TYPE_SLOW_POISON = Jass_Constant_Native_ConvertDamageType(23);
export const DAMAGE_TYPE_SPIRIT_LINK = Jass_Constant_Native_ConvertDamageType(24);
export const DAMAGE_TYPE_SHADOW_STRIKE = Jass_Constant_Native_ConvertDamageType(25);
export const DAMAGE_TYPE_UNIVERSAL = Jass_Constant_Native_ConvertDamageType(26);

export const WEAPON_TYPE_WHOKNOWS = Jass_Constant_Native_ConvertWeaponType(0);
export const WEAPON_TYPE_METAL_LIGHT_CHOP = Jass_Constant_Native_ConvertWeaponType(1);
export const WEAPON_TYPE_METAL_MEDIUM_CHOP = Jass_Constant_Native_ConvertWeaponType(2);
export const WEAPON_TYPE_METAL_HEAVY_CHOP = Jass_Constant_Native_ConvertWeaponType(3);
export const WEAPON_TYPE_METAL_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(4);
export const WEAPON_TYPE_METAL_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(5);
export const WEAPON_TYPE_METAL_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(6);
export const WEAPON_TYPE_METAL_MEDIUM_BASH = Jass_Constant_Native_ConvertWeaponType(7);
export const WEAPON_TYPE_METAL_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(8);
export const WEAPON_TYPE_METAL_MEDIUM_STAB = Jass_Constant_Native_ConvertWeaponType(9);
export const WEAPON_TYPE_METAL_HEAVY_STAB = Jass_Constant_Native_ConvertWeaponType(10);
export const WEAPON_TYPE_WOOD_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(11);
export const WEAPON_TYPE_WOOD_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(12);
export const WEAPON_TYPE_WOOD_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(13);
export const WEAPON_TYPE_WOOD_LIGHT_BASH = Jass_Constant_Native_ConvertWeaponType(14);
export const WEAPON_TYPE_WOOD_MEDIUM_BASH = Jass_Constant_Native_ConvertWeaponType(15);
export const WEAPON_TYPE_WOOD_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(16);
export const WEAPON_TYPE_WOOD_LIGHT_STAB = Jass_Constant_Native_ConvertWeaponType(17);
export const WEAPON_TYPE_WOOD_MEDIUM_STAB = Jass_Constant_Native_ConvertWeaponType(18);
export const WEAPON_TYPE_CLAW_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(19);
export const WEAPON_TYPE_CLAW_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(20);
export const WEAPON_TYPE_CLAW_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(21);
export const WEAPON_TYPE_AXE_MEDIUM_CHOP = Jass_Constant_Native_ConvertWeaponType(22);
export const WEAPON_TYPE_ROCK_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(23);


export const PATHING_TYPE_ANY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_WALKABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_FLYABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_BUILDABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_PEONHARVESTPATHING = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_BLIGHTPATHING = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_FLOATABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_AMPHIBIOUSPATHING = Jass_Constant_Native_ConvertPathingType(0);


export const RACE_PREF_HUMAN = Jass_Constant_Native_ConvertRacePref(1);
export const RACE_PREF_ORC = Jass_Constant_Native_ConvertRacePref(2);
export const RACE_PREF_NIGHTELF = Jass_Constant_Native_ConvertRacePref(4);
export const RACE_PREF_UNDEAD = Jass_Constant_Native_ConvertRacePref(8);
export const RACE_PREF_DEMON = Jass_Constant_Native_ConvertRacePref(16);
export const RACE_PREF_RANDOM = Jass_Constant_Native_ConvertRacePref(32);
export const RACE_PREF_USER_SELECTABLE = Jass_Constant_Native_ConvertRacePref(64);

export const MAP_CONTROL_USER = Jass_Constant_Native_ConvertMapControl(0);
export const MAP_CONTROL_COMPUTER = Jass_Constant_Native_ConvertMapControl(1);
export const MAP_CONTROL_RESCUABLE = Jass_Constant_Native_ConvertMapControl(2);
export const MAP_CONTROL_NEUTRAL = Jass_Constant_Native_ConvertMapControl(3);
export const MAP_CONTROL_CREEP = Jass_Constant_Native_ConvertMapControl(4);
export const MAP_CONTROL_NONE = Jass_Constant_Native_ConvertMapControl(5);

export const GAME_TYPE_MELEE = Jass_Constant_Native_ConvertGameType(1);
export const GAME_TYPE_FFA = Jass_Constant_Native_ConvertGameType(2);
export const GAME_TYPE_USE_MAP_SETTINGS = Jass_Constant_Native_ConvertGameType(4);
export const GAME_TYPE_BLIZ = Jass_Constant_Native_ConvertGameType(8);
export const GAME_TYPE_ONE_TO_ONE = Jass_Constant_Native_ConvertGameType(16);
export const GAME_TYPE_TWO_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(32);
export const GAME_TYPE_THREE_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(64);
export const GAME_TYPE_FOUR_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(128);

export const MAP_FOG_HIDE_TERRAIN = Jass_Constant_Native_ConvertMapFlag(1);
export const MAP_FOG_MAP_EXPLORED = Jass_Constant_Native_ConvertMapFlag(2);
export const MAP_FOG_ALWAYS_VISIBLE = Jass_Constant_Native_ConvertMapFlag(4);

export const MAP_USE_HANDICAPS = Jass_Constant_Native_ConvertMapFlag(8);
export const MAP_OBSERVERS = Jass_Constant_Native_ConvertMapFlag(16);
export const MAP_OBSERVERS_ON_DEATH = Jass_Constant_Native_ConvertMapFlag(32);
export const MAP_FIXED_COLORS = Jass_Constant_Native_ConvertMapFlag(128);
export const MAP_LOCK_RESOURCE_TRADING = Jass_Constant_Native_ConvertMapFlag(256);
export const MAP_RESOURCE_TRADING_ALLIES_ONLY = Jass_Constant_Native_ConvertMapFlag(512);
export const MAP_LOCK_ALLIANCE_CHANGES = Jass_Constant_Native_ConvertMapFlag(1024);
export const MAP_ALLIANCE_CHANGES_HIDDEN = Jass_Constant_Native_ConvertMapFlag(2048);
export const MAP_CHEATS = Jass_Constant_Native_ConvertMapFlag(4096);
export const MAP_CHEATS_HIDDEN = Jass_Constant_Native_ConvertMapFlag(8192);
export const MAP_LOCK_SPEED = Jass_Constant_Native_ConvertMapFlag(8192 * 2);
export const MAP_LOCK_RANDOM_SEED = Jass_Constant_Native_ConvertMapFlag(8192 * 4);
export const MAP_SHARED_ADVANCED_CONTROL = Jass_Constant_Native_ConvertMapFlag(8192 * 8);
export const MAP_RANDOM_HERO = Jass_Constant_Native_ConvertMapFlag(8192 * 16);
export const MAP_RANDOM_RACES = Jass_Constant_Native_ConvertMapFlag(8192 * 32);
export const MAP_RELOADED = Jass_Constant_Native_ConvertMapFlag(8192 * 64);

export const MAP_PLACEMENT_RANDOM = Jass_Constant_Native_ConvertPlacement(0);
export const MAP_PLACEMENT_FIXED = Jass_Constant_Native_ConvertPlacement(1);
export const MAP_PLACEMENT_USE_MAP_SETTINGS = Jass_Constant_Native_ConvertPlacement(2);
export const MAP_PLACEMENT_TEAMS_TOGETHER = Jass_Constant_Native_ConvertPlacement(3);


export const MAP_LOC_PRIO_LOW = Jass_Constant_Native_ConvertStartLocPrio(0);
export const MAP_LOC_PRIO_HIGH = Jass_Constant_Native_ConvertStartLocPrio(1);
export const MAP_LOC_PRIO_NOT = Jass_Constant_Native_ConvertStartLocPrio(2);

export const MAP_DENSITY_NONE = Jass_Constant_Native_ConvertMapDensity(0);
export const MAP_DENSITY_LIGHT = Jass_Constant_Native_ConvertMapDensity(1);
export const MAP_DENSITY_MEDIUM = Jass_Constant_Native_ConvertMapDensity(2);
export const MAP_DENSITY_HEAVY = Jass_Constant_Native_ConvertMapDensity(3);

export const MAP_DIFFICULTY_EASY = Jass_Constant_Native_ConvertGameDifficulty(0);
export const MAP_DIFFICULTY_NORMAL = Jass_Constant_Native_ConvertGameDifficulty(1);
export const MAP_DIFFICULTY_HARD = Jass_Constant_Native_ConvertGameDifficulty(2);
export const MAP_DIFFICULTY_INSANE = Jass_Constant_Native_ConvertGameDifficulty(3);

export const MAP_SPEED_SLOWEST = Jass_Constant_Native_ConvertGameSpeed(0);
export const MAP_SPEED_SLOW = Jass_Constant_Native_ConvertGameSpeed(1);
export const MAP_SPEED_NORMAL = Jass_Constant_Native_ConvertGameSpeed(2);
export const MAP_SPEED_FAST = Jass_Constant_Native_ConvertGameSpeed(3);
export const MAP_SPEED_FASTEST = Jass_Constant_Native_ConvertGameSpeed(4);

export const PLAYER_SLOT_STATE_EMPTY = Jass_Constant_Native_ConvertPlayerSlotState(0);
export const PLAYER_SLOT_STATE_PLAYING = Jass_Constant_Native_ConvertPlayerSlotState(1);
export const PLAYER_SLOT_STATE_LEFT = Jass_Constant_Native_ConvertPlayerSlotState(2);


export const SOUND_VOLUMEGROUP_UNITMOVEMENT = Jass_Constant_Native_ConvertVolumeGroup(0);
export const SOUND_VOLUMEGROUP_UNITSOUNDS = Jass_Constant_Native_ConvertVolumeGroup(1);
export const SOUND_VOLUMEGROUP_COMBAT = Jass_Constant_Native_ConvertVolumeGroup(2);
export const SOUND_VOLUMEGROUP_SPELLS = Jass_Constant_Native_ConvertVolumeGroup(3);
export const SOUND_VOLUMEGROUP_UI = Jass_Constant_Native_ConvertVolumeGroup(4);
export const SOUND_VOLUMEGROUP_MUSIC = Jass_Constant_Native_ConvertVolumeGroup(5);
export const SOUND_VOLUMEGROUP_AMBIENTSOUNDS = Jass_Constant_Native_ConvertVolumeGroup(6);
export const SOUND_VOLUMEGROUP_FIRE = Jass_Constant_Native_ConvertVolumeGroup(7);

export const GAME_STATE_DIVINE_INTERVENTION = Jass_Constant_Native_ConvertIGameState(0);
export const GAME_STATE_DISCONNECTED = Jass_Constant_Native_ConvertIGameState(1);
export const GAME_STATE_TIME_OF_DAY = Jass_Constant_Native_ConvertIGameState(2);

export const PLAYER_STATE_GAME_RESULT = Jass_Constant_Native_ConvertPlayerState(0);
export const PLAYER_STATE_RESOURCE_GOLD = Jass_Constant_Native_ConvertPlayerState(1);
export const PLAYER_STATE_RESOURCE_LUMBER = Jass_Constant_Native_ConvertPlayerState(2);
export const PLAYER_STATE_RESOURCE_HERO_TOKENS = Jass_Constant_Native_ConvertPlayerState(3);
export const PLAYER_STATE_RESOURCE_FOOD_CAP = Jass_Constant_Native_ConvertPlayerState(4);
export const PLAYER_STATE_RESOURCE_FOOD_USED = Jass_Constant_Native_ConvertPlayerState(5);
export const PLAYER_STATE_FOOD_CAP_CEILING = Jass_Constant_Native_ConvertPlayerState(6);
export const PLAYER_STATE_GIVES_BOUNTY = Jass_Constant_Native_ConvertPlayerState(7);
export const PLAYER_STATE_ALLIED_VICTORY = Jass_Constant_Native_ConvertPlayerState(8);
export const PLAYER_STATE_PLACED = Jass_Constant_Native_ConvertPlayerState(9);
export const PLAYER_STATE_OBSERVER_ON_DEATH = Jass_Constant_Native_ConvertPlayerState(10);
export const PLAYER_STATE_OBSERVER = Jass_Constant_Native_ConvertPlayerState(11);
export const PLAYER_STATE_UNFOLLOWABLE = Jass_Constant_Native_ConvertPlayerState(12);
export const PLAYER_STATE_GOLD_UPKEEP_RATE = Jass_Constant_Native_ConvertPlayerState(13);
export const PLAYER_STATE_LUMBER_UPKEEP_RATE = Jass_Constant_Native_ConvertPlayerState(14);
export const PLAYER_STATE_GOLD_GATHERED = Jass_Constant_Native_ConvertPlayerState(15);
export const PLAYER_STATE_LUMBER_GATHERED = Jass_Constant_Native_ConvertPlayerState(16);
export const PLAYER_STATE_NO_CREEP_SLEEP = Jass_Constant_Native_ConvertPlayerState(25);


export const UNIT_STATE_LIFE = Jass_Constant_Native_ConvertUnitState(0);
export const UNIT_STATE_MAX_LIFE = Jass_Constant_Native_ConvertUnitState(1);
export const UNIT_STATE_MANA = Jass_Constant_Native_ConvertUnitState(2);
export const UNIT_STATE_MAX_MANA = Jass_Constant_Native_ConvertUnitState(3);

export const AI_DIFFICULTY_NEWBIE = Jass_Constant_Native_ConvertAIDifficulty(0);
export const AI_DIFFICULTY_NORMAL = Jass_Constant_Native_ConvertAIDifficulty(1);
export const AI_DIFFICULTY_INSANE = Jass_Constant_Native_ConvertAIDifficulty(2);


export const PLAYER_SCORE_UNITS_TRAINED = Jass_Constant_Native_ConvertPlayerScore(0);
export const PLAYER_SCORE_UNITS_KILLED = Jass_Constant_Native_ConvertPlayerScore(1);
export const PLAYER_SCORE_STRUCT_BUILT = Jass_Constant_Native_ConvertPlayerScore(2);
export const PLAYER_SCORE_STRUCT_RAZED = Jass_Constant_Native_ConvertPlayerScore(3);
export const PLAYER_SCORE_TECH_PERCENT = Jass_Constant_Native_ConvertPlayerScore(4);
export const PLAYER_SCORE_FOOD_MAXPROD = Jass_Constant_Native_ConvertPlayerScore(5);
export const PLAYER_SCORE_FOOD_MAXUSED = Jass_Constant_Native_ConvertPlayerScore(6);
export const PLAYER_SCORE_HEROES_KILLED = Jass_Constant_Native_ConvertPlayerScore(7);
export const PLAYER_SCORE_ITEMS_GAINED = Jass_Constant_Native_ConvertPlayerScore(8);
export const PLAYER_SCORE_MERCS_HIRED = Jass_Constant_Native_ConvertPlayerScore(9);
export const PLAYER_SCORE_GOLD_MINED_TOTAL = Jass_Constant_Native_ConvertPlayerScore(10);
export const PLAYER_SCORE_GOLD_MINED_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(11);
export const PLAYER_SCORE_GOLD_LOST_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(12);
export const PLAYER_SCORE_GOLD_LOST_TAX = Jass_Constant_Native_ConvertPlayerScore(13);
export const PLAYER_SCORE_GOLD_GIVEN = Jass_Constant_Native_ConvertPlayerScore(14);
export const PLAYER_SCORE_GOLD_RECEIVED = Jass_Constant_Native_ConvertPlayerScore(15);
export const PLAYER_SCORE_LUMBER_TOTAL = Jass_Constant_Native_ConvertPlayerScore(16);
export const PLAYER_SCORE_LUMBER_LOST_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(17);
export const PLAYER_SCORE_LUMBER_LOST_TAX = Jass_Constant_Native_ConvertPlayerScore(18);
export const PLAYER_SCORE_LUMBER_GIVEN = Jass_Constant_Native_ConvertPlayerScore(19);
export const PLAYER_SCORE_LUMBER_RECEIVED = Jass_Constant_Native_ConvertPlayerScore(20);
export const PLAYER_SCORE_UNIT_TOTAL = Jass_Constant_Native_ConvertPlayerScore(21);
export const PLAYER_SCORE_HERO_TOTAL = Jass_Constant_Native_ConvertPlayerScore(22);
export const PLAYER_SCORE_RESOURCE_TOTAL = Jass_Constant_Native_ConvertPlayerScore(23);
export const PLAYER_SCORE_TOTAL = Jass_Constant_Native_ConvertPlayerScore(24);


/*Events*/

export const EVENT_GAME_VICTORY = Jass_Constant_Native_ConvertGameEvent(0);
export const EVENT_GAME_END_LEVEL = Jass_Constant_Native_ConvertGameEvent(1);
export const EVENT_GAME_VARIABLE_LIMIT = Jass_Constant_Native_ConvertGameEvent(2);
export const EVENT_GAME_STATE_LIMIT = Jass_Constant_Native_ConvertGameEvent(3);
export const EVENT_GAME_TIMER_EXPIRED = Jass_Constant_Native_ConvertGameEvent(4);
export const EVENT_GAME_ENTER_REGION = Jass_Constant_Native_ConvertGameEvent(5);
export const EVENT_GAME_LEAVE_REGION = Jass_Constant_Native_ConvertGameEvent(6);
export const EVENT_GAME_TRACKABLE_HIT = Jass_Constant_Native_ConvertGameEvent(7);
export const EVENT_GAME_TRACKABLE_TRACK = Jass_Constant_Native_ConvertGameEvent(8);
export const EVENT_GAME_SHOW_SKILL = Jass_Constant_Native_ConvertGameEvent(9);
export const EVENT_GAME_BUILD_SUBMENU = Jass_Constant_Native_ConvertGameEvent(10);


export const EVENT_PLAYER_STATE_LIMIT = Jass_Constant_Native_ConvertPlayerEvent(11);
export const EVENT_PLAYER_ALLIANCE_CHANGED = Jass_Constant_Native_ConvertPlayerEvent(12);
export const EVENT_PLAYER_DEFEAT = Jass_Constant_Native_ConvertPlayerEvent(13);
export const EVENT_PLAYER_VICTORY = Jass_Constant_Native_ConvertPlayerEvent(14);
export const EVENT_PLAYER_LEAVE = Jass_Constant_Native_ConvertPlayerEvent(15);
export const EVENT_PLAYER_CHAT = Jass_Constant_Native_ConvertPlayerEvent(16);
export const EVENT_PLAYER_END_CINEMATIC = Jass_Constant_Native_ConvertPlayerEvent(17);

export const EVENT_PLAYER_UNIT_ATTACKED = Jass_Constant_Native_ConvertUnitEvent(18);
export const EVENT_PLAYER_UNIT_RESCUED = Jass_Constant_Native_ConvertUnitEvent(19);
export const EVENT_PLAYER_UNIT_DEATH = Jass_Constant_Native_ConvertUnitEvent(20);
export const EVENT_PLAYER_UNIT_DECAY = Jass_Constant_Native_ConvertUnitEvent(21);
export const EVENT_PLAYER_UNIT_DETECTED = Jass_Constant_Native_ConvertUnitEvent(22);
export const EVENT_PLAYER_UNIT_HIDDEN = Jass_Constant_Native_ConvertUnitEvent(23);
export const EVENT_PLAYER_UNIT_SELECTED = Jass_Constant_Native_ConvertUnitEvent(24);
export const EVENT_PLAYER_UNIT_DESELECTED = Jass_Constant_Native_ConvertUnitEvent(25);
export const EVENT_PLAYER_UNIT_CONSTRUCT_STATR = Jass_Constant_Native_ConvertUnitEvent(26);
export const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native_ConvertUnitEvent(27);
export const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native_ConvertUnitEvent(28);
export const EVENT_PLAYER_UNIT_UPGRADE_START = Jass_Constant_Native_ConvertUnitEvent(29);
export const EVENT_PLAYER_UNIT_UPGRADE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(30);
export const EVENT_PLAYER_UNIT_UPGRADE_FINISH = Jass_Constant_Native_ConvertUnitEvent(31);
export const EVENT_PLAYER_UNIT_TRAIN_START = Jass_Constant_Native_ConvertUnitEvent(32);
export const EVENT_PLAYER_UNIT_TRAIN_CANCEL = Jass_Constant_Native_ConvertUnitEvent(33);
export const EVENT_PLAYER_UNIT_TRAIN_FINISH = Jass_Constant_Native_ConvertUnitEvent(34);
export const EVENT_PLAYER_UNIT_RESEARCH_START = Jass_Constant_Native_ConvertUnitEvent(35);
export const EVENT_PLAYER_UNIT_RESEARCH_CANCEL = Jass_Constant_Native_ConvertUnitEvent(36);
export const EVENT_PLAYER_UNIT_RESEARCH_FINISH = Jass_Constant_Native_ConvertUnitEvent(37);
export const EVENT_PLAYER_UNIT_ISSUED_ORDER = Jass_Constant_Native_ConvertUnitEvent(38);
export const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native_ConvertUnitEvent(39);
export const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native_ConvertUnitEvent(40);
export const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = Jass_Constant_Native_ConvertUnitEvent(40);
export const EVENT_PLAYER_HERO_LEVEL = Jass_Constant_Native_ConvertUnitEvent(41);
export const EVENT_PLAYER_HERO_SKILL = Jass_Constant_Native_ConvertUnitEvent(42);
export const EVENT_PLAYER_HERO_REVIVABLE = Jass_Constant_Native_ConvertUnitEvent(43);
export const EVENT_PLAYER_HERO_REVIVE_START = Jass_Constant_Native_ConvertUnitEvent(44);
export const EVENT_PLAYER_HERO_REVIVE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(45);
export const EVENT_PLAYER_HERO_REVIVE_FINISH = Jass_Constant_Native_ConvertUnitEvent(46);
export const EVENT_PLAYER_UNIT_SUMMON = Jass_Constant_Native_ConvertUnitEvent(47);
export const EVENT_PLAYER_UNIT_DROP_ITEM = Jass_Constant_Native_ConvertUnitEvent(48);
export const EVENT_PLAYER_UNIT_PICKUP_ITEM = Jass_Constant_Native_ConvertUnitEvent(49);
export const EVENT_PLAYER_UNIT_USE_ITEM = Jass_Constant_Native_ConvertUnitEvent(50);
export const EVENT_PLAYER_UNIT_LOADED = Jass_Constant_Native_ConvertUnitEvent(51);

export const EVENT_UNIT_DAMAGED = Jass_Constant_Native_ConvertUnitEvent(52);
export const EVENT_UNIT_DEATH = Jass_Constant_Native_ConvertUnitEvent(53);
export const EVENT_UNIT_DECAY = Jass_Constant_Native_ConvertUnitEvent(54);
export const EVENT_UNIT_DETECTED = Jass_Constant_Native_ConvertUnitEvent(55);
export const EVENT_UNIT_HIDDEN = Jass_Constant_Native_ConvertUnitEvent(56);
export const EVENT_UNIT_SELECTED = Jass_Constant_Native_ConvertUnitEvent(57);
export const EVENT_UNIT_DESELECTED = Jass_Constant_Native_ConvertUnitEvent(58);
export const EVENT_UNIT_STATE_LIMIT = Jass_Constant_Native_ConvertUnitEvent(59);
export const EVENT_UNIT_ACQUIRED_TARGET = Jass_Constant_Native_ConvertUnitEvent(60);
export const EVENT_UNIT_TARGET_IN_RANGE = Jass_Constant_Native_ConvertUnitEvent(61);
export const EVENT_UNIT_ATTACKED = Jass_Constant_Native_ConvertUnitEvent(62);
export const EVENT_UNIT_RESCUED = Jass_Constant_Native_ConvertUnitEvent(63);
export const EVENT_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native_ConvertUnitEvent(64);
export const EVENT_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native_ConvertUnitEvent(65);
export const EVENT_UNIT_UPGRADE_START = Jass_Constant_Native_ConvertUnitEvent(66);
export const EVENT_UNIT_UPGRADE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(67);
export const EVENT_UNIT_UPGRADE_FINISH = Jass_Constant_Native_ConvertUnitEvent(68);
export const EVENT_UNIT_TRAIN_START = Jass_Constant_Native_ConvertUnitEvent(69);
export const EVENT_UNIT_TRAIN_CANCEL = Jass_Constant_Native_ConvertUnitEvent(70);
export const EVENT_UNIT_TRAIN_FINISH = Jass_Constant_Native_ConvertUnitEvent(71);
export const EVENT_UNIT_RESEARCH_START = Jass_Constant_Native_ConvertUnitEvent(72);
export const EVENT_UNIT_RESEARCH_CANCEL = Jass_Constant_Native_ConvertUnitEvent(73);
export const EVENT_UNIT_RESEARCH_FINISH = Jass_Constant_Native_ConvertUnitEvent(74);
export const EVENT_UNIT_ISSUED_ORDER = Jass_Constant_Native_ConvertUnitEvent(75);
export const EVENT_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native_ConvertUnitEvent(76);
export const EVENT_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native_ConvertUnitEvent(77);
export const EVENT_UNIT_HERO_LEVEL = Jass_Constant_Native_ConvertUnitEvent(78);
export const EVENT_UNIT_HERO_SKILL = Jass_Constant_Native_ConvertUnitEvent(79);
export const EVENT_UNIT_HERO_REVIVABLE = Jass_Constant_Native_ConvertUnitEvent(80);
export const EVENT_UNIT_HERO_REVIVE_START = Jass_Constant_Native_ConvertUnitEvent(81);
export const EVENT_UNIT_HERO_REVIVE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(82);
export const EVENT_UNIT_HERO_REVIVE_FINISH = Jass_Constant_Native_ConvertUnitEvent(83);
export const EVENT_UNIT_SUMMON = Jass_Constant_Native_ConvertUnitEvent(84);
export const EVENT_UNIT_DROP_ITEM = Jass_Constant_Native_ConvertUnitEvent(85);
export const EVENT_UNIT_PICKUP_ITEM = Jass_Constant_Native_ConvertUnitEvent(86);
export const EVENT_UNIT_USE_ITEM = Jass_Constant_Native_ConvertUnitEvent(87);
export const EVENT_UNIT_LOADED = Jass_Constant_Native_ConvertUnitEvent(88);
export const EVENT_UNIT_WIDGET_DEATH = Jass_Constant_Native_ConvertWidgetEvent(89);

export const EVENT_DIALOG_BUTTON_CLICK = Jass_Constant_Native_ConvertDialogEvent(90);
export const EVENT_DIALOG_CLICK = Jass_Constant_Native_ConvertDialogEvent(91);

export const EVENT_GAME_LOADED = Jass_Constant_Native_ConvertGameEvent(256);
export const EVENT_GAME_TOURNAMENT_FINISH_SOON = Jass_Constant_Native_ConvertGameEvent(257);
export const EVENT_GAME_TOURNAMENT_FINISH_NOW = Jass_Constant_Native_ConvertGameEvent(258);
export const EVENT_GAME_GAME_SAVE = Jass_Constant_Native_ConvertGameEvent(259);

export const EVENT_PLAYER_ARROW_LEFT_DOWN = Jass_Constant_Native_ConvertPlayerEvent(261);
export const EVENT_PLAYER_ARROW_LEFT_UP = Jass_Constant_Native_ConvertPlayerEvent(262);
export const EVENT_PLAYER_ARROW_RIGHT_DOWN = Jass_Constant_Native_ConvertPlayerEvent(263);
export const EVENT_PLAYER_ARROW_RIGHT_UP = Jass_Constant_Native_ConvertPlayerEvent(264);
export const EVENT_PLAYER_ARROW_DOWN_DOWN = Jass_Constant_Native_ConvertPlayerEvent(265);
export const EVENT_PLAYER_ARROW_DOWN_UP = Jass_Constant_Native_ConvertPlayerEvent(266);
export const EVENT_PLAYER_ARROW_UP_DOWN = Jass_Constant_Native_ConvertPlayerEvent(267);
export const EVENT_PLAYER_ARROW_UP_UP = Jass_Constant_Native_ConvertPlayerEvent(268);

export const EVENT_PLAYER_UNIT_SELL = Jass_Constant_Native_ConvertPlayerUnitEvent(269);
export const EVENT_PLAYER_UNIT_CHANGE_OWNER = Jass_Constant_Native_ConvertPlayerUnitEvent(270);
export const EVENT_PLAYER_UNIT_SELL_ITEM = Jass_Constant_Native_ConvertPlayerUnitEvent(271);
export const EVENT_PLAYER_UNIT_SPELL_CHANNEL = Jass_Constant_Native_ConvertPlayerUnitEvent(272);
export const EVENT_PLAYER_UNIT_SPELL_CAST = Jass_Constant_Native_ConvertPlayerUnitEvent(273);
export const EVENT_PLAYER_UNIT_SPELL_EFFECT = Jass_Constant_Native_ConvertPlayerUnitEvent(274);
export const EVENT_PLAYER_UNIT_SPELL_FINISH = Jass_Constant_Native_ConvertPlayerUnitEvent(275);
export const EVENT_PLAYER_UNIT_SPELL_ENDCAST = Jass_Constant_Native_ConvertPlayerUnitEvent(276);
export const EVENT_PLAYER_UNIT_PAWN_ITEM = Jass_Constant_Native_ConvertPlayerUnitEvent(277);

export const EVENT_UNIT_SELL = Jass_Constant_Native_ConvertUnitEvent(286);
export const EVENT_UNIT_CHANGE_OWNER = Jass_Constant_Native_ConvertUnitEvent(287);
export const EVENT_UNIT_SELL_ITEM = Jass_Constant_Native_ConvertUnitEvent(288);
export const EVENT_UNIT_SPELL_CHANNEL = Jass_Constant_Native_ConvertUnitEvent(289);
export const EVENT_UNIT_SPELL_CAST = Jass_Constant_Native_ConvertUnitEvent(290);
export const EVENT_UNIT_SPELL_EFFECT = Jass_Constant_Native_ConvertUnitEvent(291);
export const EVENT_UNIT_SPELL_FINISH = Jass_Constant_Native_ConvertUnitEvent(292);
export const EVENT_UNIT_SPELL_ENDCAST = Jass_Constant_Native_ConvertUnitEvent(293);
export const EVENT_UNIT_PAWN_ITEM = Jass_Constant_Native_ConvertUnitEvent(294);

export const LESS_THAN = Jass_Constant_Native_ConvertLimitOp(0);
export const LESS_THAN_OR_EQUAL = Jass_Constant_Native_ConvertLimitOp(1);
export const EQUAL = Jass_Constant_Native_ConvertLimitOp(2);
export const GREATER_THAN_OR_EQUAL = Jass_Constant_Native_ConvertLimitOp(3);
export const GREATER_THAN = Jass_Constant_Native_ConvertLimitOp(4);
export const NOT_EQUAL = Jass_Constant_Native_ConvertLimitOp(5);

export const UNIT_TYPE_HERO = Jass_Constant_Native_ConvertUnitType(0);
export const UNIT_TYPE_DEAD = Jass_Constant_Native_ConvertUnitType(1);
export const UNIT_TYPE_STRUCTURE = Jass_Constant_Native_ConvertUnitType(2);
export const UNIT_TYPE_FLYING = Jass_Constant_Native_ConvertUnitType(3);
export const UNIT_TYPE_GROUND = Jass_Constant_Native_ConvertUnitType(4);
export const UNIT_TYPE_ATTACKS_FLYING = Jass_Constant_Native_ConvertUnitType(5);
export const UNIT_TYPE_ATTACKS_GROUND = Jass_Constant_Native_ConvertUnitType(6);
export const UNIT_TYPE_MELEE_ATTACKER = Jass_Constant_Native_ConvertUnitType(7);
export const UNIT_TYPE_RANGED_ATTACKER = Jass_Constant_Native_ConvertUnitType(8);
export const UNIT_TYPE_GIANT = Jass_Constant_Native_ConvertUnitType(9);
export const UNIT_TYPE_SUMMONED = Jass_Constant_Native_ConvertUnitType(10);
export const UNIT_TYPE_STUNNED = Jass_Constant_Native_ConvertUnitType(11);
export const UNIT_TYPE_PLAGUED = Jass_Constant_Native_ConvertUnitType(12);
export const UNIT_TYPE_SNARED = Jass_Constant_Native_ConvertUnitType(13);
export const UNIT_TYPE_UNDEAD = Jass_Constant_Native_ConvertUnitType(14);
export const UNIT_TYPE_MECHANICAL = Jass_Constant_Native_ConvertUnitType(15);
export const UNIT_TYPE_PEON = Jass_Constant_Native_ConvertUnitType(16);
export const UNIT_TYPE_SAPPER = Jass_Constant_Native_ConvertUnitType(17);
export const UNIT_TYPE_TOWNHALL = Jass_Constant_Native_ConvertUnitType(18);
export const UNIT_TYPE_ANCIENT = Jass_Constant_Native_ConvertUnitType(19);
export const UNIT_TYPE_TAUREN = Jass_Constant_Native_ConvertUnitType(20);
export const UNIT_TYPE_POISONED = Jass_Constant_Native_ConvertUnitType(21);
export const UNIT_TYPE_POLYMORPHED = Jass_Constant_Native_ConvertUnitType(22);
export const UNIT_TYPE_SLEEPING = Jass_Constant_Native_ConvertUnitType(23);
export const UNIT_TYPE_RESISTANT = Jass_Constant_Native_ConvertUnitType(24);
export const UNIT_TYPE_ETHEREAL = Jass_Constant_Native_ConvertUnitType(25);
export const UNIT_TYPE_MAGIC_IMMUNE = Jass_Constant_Native_ConvertUnitType(26);

export const ITEM_TYPE_PERMANENT = Jass_Constant_Native_ConvertItemType(0);
export const ITEM_TYPE_CHARGED = Jass_Constant_Native_ConvertItemType(1);
export const ITEM_TYPE_POWERUP = Jass_Constant_Native_ConvertItemType(2);
export const ITEM_TYPE_ARTIFACT = Jass_Constant_Native_ConvertItemType(3);
export const ITEM_TYPE_PURCHASABLE = Jass_Constant_Native_ConvertItemType(4);
export const ITEM_TYPE_CAMPAIGN = Jass_Constant_Native_ConvertItemType(5);
export const ITEM_TYPE_MISCELLANEOUS = Jass_Constant_Native_ConvertItemType(6);
export const ITEM_TYPE_UNKNOWN = Jass_Constant_Native_ConvertItemType(7);
export const ITEM_TYPE_ANY = Jass_Constant_Native_ConvertItemType(8);
export const ITEM_TYPE_TOME = Jass_Constant_Native_ConvertItemType(2);

export const CAMERA_FIELD_TARGET_DISTANCE = Jass_Constant_Native_ConvertCameraField(0);
export const CAMERA_FIELD_FARZ = Jass_Constant_Native_ConvertCameraField(1);
export const CAMERA_FIELD_ANGLE_OF_ATTACK = Jass_Constant_Native_ConvertCameraField(2);
export const CAMERA_FIELD_FIELD_OF_VIEW = Jass_Constant_Native_ConvertCameraField(3);
export const CAMERA_FIELD_ROLL = Jass_Constant_Native_ConvertCameraField(4);
export const CAMERA_FIELD_ROTATION = Jass_Constant_Native_ConvertCameraField(5);
export const CAMERA_FIELD_ZOFFSET = Jass_Constant_Native_ConvertCameraField(6);

export const BLEND_MODE_NONE = Jass_Constant_Native_ConvertBlendMode(0);
export const BLEND_MODE_DONT_CARE = Jass_Constant_Native_ConvertBlendMode(0);
export const BLEND_MODE_KEYALPHA = Jass_Constant_Native_ConvertBlendMode(1);
export const BLEND_MODE_BLEND = Jass_Constant_Native_ConvertBlendMode(2);
export const BLEND_MODE_ADDITIVE = Jass_Constant_Native_ConvertBlendMode(3);
export const BLEND_MODE_MODULATE = Jass_Constant_Native_ConvertBlendMode(4);
export const BLEND_MODE_MODULATE_2X = Jass_Constant_Native_ConvertBlendMode(5);

export const RARITY_FREQUENT = Jass_Constant_Native_ConvertRarityControl(0);
export const RARITY_RARE = Jass_Constant_Native_ConvertRarityControl(1);

export const TEXMAP_FLAG_NONE = Jass_Constant_Native_ConvertTexMapFlags(0);
export const TEXMAP_FLAG_WRAP_U = Jass_Constant_Native_ConvertTexMapFlags(1);
export const TEXMAP_FLAG_WRAP_V = Jass_Constant_Native_ConvertTexMapFlags(2);
export const TEXMAP_FLAG_WRAP_UV = Jass_Constant_Native_ConvertTexMapFlags(3);

export const FOG_OF_WAR_MASKED = Jass_Constant_Native_ConvertFogState(1);
export const FOG_OF_WAR_FOGGED = Jass_Constant_Native_ConvertFogState(2);
export const FOG_OF_WAR_VISIBLE = Jass_Constant_Native_ConvertFogState(4);

export const CAMERA_MARGIN_LEFT = 0;
export const CAMERA_MARGIN_RIGHT = 1;
export const CAMERA_MARGIN_TOP = 2;
export const CAMERA_MARGIN_BOTTOM = 3;

export const EFFECT_TYPE_EFFECT = Jass_Constant_Native_ConvertEffectType(0);
export const EFFECT_TYPE_TARGET = Jass_Constant_Native_ConvertEffectType(1);
export const EFFECT_TYPE_CASTER = Jass_Constant_Native_ConvertEffectType(2);
export const EFFECT_TYPE_SPECIAL = Jass_Constant_Native_ConvertEffectType(3);
export const EFFECT_TYPE_AREA_EFFECT = Jass_Constant_Native_ConvertEffectType(4);
export const EFFECT_TYPE_MISSILE = Jass_Constant_Native_ConvertEffectType(5);
export const EFFECT_TYPE_LIGHTNING = Jass_Constant_Native_ConvertEffectType(6);

export const SOUND_TYPE_EFFECT = Jass_Constant_Native_ConvertSoundType(0);
export const SOUND_TYPE_EFFECT_LOOPED = Jass_Constant_Native_ConvertSoundType(1);

/*Math*/
export declare function Jass_Native_Deg2Rad(degrees: real): real;

export declare function Jass_Native_Rad2Deg(radians: real): real;

export declare function Jass_Native_Sin(radians: real): real;

export declare function Jass_Native_Cos(radians: real): real;

export declare function Jass_Native_Tan(radians: real): real;

export declare function Jass_Native_Asin(y: real): real;

export declare function Jass_Native_Acos(x: real): real;

export declare function Jass_Native_Atan(x: real): real;

export declare function Jass_Native_Atan2(x: real): real;

export declare function Jass_Native_SquareRoot(x: real): real;

export declare function Jass_Native_Pow(x: real, power: real): real;


/*Utility*/
export declare function Jass_Native_I2R(i: integer): real;

export declare function Jass_Native_R2I(r: real): integer;

export declare function Jass_Native_I2S(i: integer): string;

export declare function Jass_Native_R2S(r: real): String;

export declare function Jass_Native_R2SW(r: real, width: integer, precision: integer): string;

export declare function Jass_Native_S2I(s: string): integer;

export declare function Jass_Native_S2R(s: string): real;

export declare function Jass_Native_GetHandleId(h: handle): integer;

export declare function Jass_Native_SubString(source: string, start: integer, end: integer): string;

export declare function Jass_Native_StringLength(s: string): integer;

export declare function Jass_Native_StringCase(source: string, upper: boolean): string;

export declare function Jass_Native_StringHasH(s: string): integer;

export declare function Jass_Native_GetLocalizedString(source: string): string;

export declare function Jass_Native_GetLocalizedHotKey(source: string): integer;


export declare function Jass_Native_Native_SetMapName(name: string): nothing;

export declare function Jass_Native_SetMapDescription(description: string): nothing;

export declare function Jass_Native_SetTeams(teamcount: integer): nothing;

export declare function Jass_Native_SetPlayers(playercount: integer): nothing;

export declare function Jass_Native_DefineStartLocation(whichStartLoc: integer, x: real, y: real): nothing;

export declare function Jass_Native_DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): nothing;

export declare function Jass_Native_SetStartLocPrioCount(whichStartLoc: integer, priSlotCount: integer): nothing;

export declare function Jass_Native_SetStartLocPrio(
    whichStartLoc: integer,
    priSlotIndex: integer,
    otherStartLocIndex: integer,
    priority: startlocprio
): nothing;

export declare function Jass_Native_GetStartLocPrioSlot(
    whichStartLoc: integer,
    prioSlotIndex: integer,
): integer;

export declare function Jass_Native_GetStartLocPrio(
    whichStartLoc: integer,
    prioSlotIndex: integer
): startlocprio;

export declare function Jass_Native_SetGameTypeSupported(
    whichGameType: gametype,
    value: boolean
): nothing;

export declare function Jass_Native_SetMapFlag(
    whichMapFlags: mapflag,
    value: boolean
): nothing;

export declare function Jass_Native_SetGamePlacement(
    whichPlacementType: placement,
): nothing;

export declare function Jass_Native_SetGameSpeed(
    whichspeed: gamespeed,
): nothing;

export declare function Jass_Native_SetGameDifficulty(
    whichdifficulty: gamedifficulty
): nothing;

export declare function Jass_Native_SetResourceDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native_SetCreatureDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native_GetTeams(): integer;

export declare function Jass_Native_GetPlayers(): integer;

export declare function Jass_Native_IsGameTypeSuppored(
    whichGameType: gametype
): boolean;

export declare function Jass_Native_GetGameTypeSelected(): gametype;

export declare function Jass_Native_IsMapFlagSet(
    whichMapFlag: mapflag
): boolean;

export declare function Jass_Native_GetGamePlacement(): placement;

export declare function Jass_Native_GetGameSpeed(): gamespeed;

export declare function Jass_Native_GetGameDifficulty(): gamedifficulty;

export declare function Jass_Native_GetResourceDensity(): mapdensity;

export declare function Jass_Native_GetCreatureDensity(): mapdensity;

export declare function Jass_Native_GetStartLocationX(
    whichStartLocation: integer
): real;

export declare function Jass_Native_GetStartLocationY(
    whichStartLocation: integer
): real;

export declare function Jass_Native_GetStartLocationLoc(
    whichStartLocation: integer
): location;

export declare function Jass_Native_SetPlayerTeam(
    whichPlayer: player,
    whichTeam: integer
): nothing;

export declare function Jass_Native_SetPlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native_ForcePlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native_SetPlayerColor(
    whichPlayer: player,
    color: playercolor
): nothing;

export declare function Jass_Native_SetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype,
    value: boolean
): nothing;

export declare function Jass_Native_SetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate,
    rate: integer
): nothing;

export declare function Jass_Native_SetPlayerRacePreference(
    whichPlayer: player,
    whichRacePreference: racepreference,
    rate: integer
): nothing;

export declare function Jass_Native_SetPlayerRaceSelectable(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native_SetPlayerController(
    whichPlayer: player,
    controlType: mapcontrol
): nothing;

export declare function Jass_Native_SetPlayerName(
    whichPlayer: player,
    name: string
): nothing;

export declare function Jass_Native_SetPlayerOnScoreScreen(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native_GetPlayerTeam(
    whichPlayer: player,
): integer;

export declare function Jass_Native_GetPlayerStartLocation(
    whichPlayer: player,
): integer;

export declare function Jass_Native_GetPlayerColor(
    whichPlayer: player,
): playercolor;

export declare function Jass_Native_GetPlayerController(
    whichPlayer: player,
): mapcontrol;

export declare function Jass_Native_GetPlayerSlotState(
    whichPlayer: player,
): playerslotstate;

export declare function Jass_Native_GetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate
): integer;

export declare function Jass_Native_IsPlayerRacePrefSet(
    whichPlayer: player,
    pref: racepreference
): boolean;

export declare function Jass_Native_GetPlayerName(
    whichPlayer: player
): string;


/*Timer*/
export declare function Jass_Native_CreateTimer(): timer;

export declare function Jass_Native_DestroyTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_TimerStart(
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: code
): nothing;

export declare function Jass_Native_TimerGetElapsed(
    whichTimer: timer,
): real;

export declare function Jass_Native_TimerGetRemaining(
    whichTimer: timer
): real;

export declare function Jass_Native_TimerGetTimeout(
    whichTimer: timer
): real;

export declare function Jass_Native_PauseTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_ResumeTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_GetExpiredTimer(): timer;

/*Group*/
export declare function Jass_Native_CreateGroup(): group;

export declare function Jass_Native_DestroyGroup(
    whichGroup
): nothing;

export declare function Jass_Native_();
export declare function Jass_Native_();

export declare function Jass_Native_();
export declare function Jass_Native_();
export declare function Jass_Native_();
export declare function Jass_Native_();

export declare function Jass_Native_();
export declare function Jass_Native_();
export declare function Jass_Native_();
export declare function Jass_Native_();