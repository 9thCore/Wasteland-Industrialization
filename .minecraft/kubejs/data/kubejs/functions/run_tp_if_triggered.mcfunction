# bad (these run every tick) but whatever
scoreboard objectives add trigger_tp trigger
scoreboard players enable @a trigger_tp

execute as @a[scores = {trigger_tp = 1..}] at @s run function kubejs:tp_and_levitate