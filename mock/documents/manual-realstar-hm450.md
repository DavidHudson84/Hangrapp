# REALSTAR HM-450

## Hydrocarbon Dry Cleaning Machine — 18 kg

### Operator and Service Manual

**Manual revision:** Rev 2 — March 2023
**Supersedes:** Rev 1 (August 2021). Rev 1 is withdrawn and must not be used.
**Applies to:** HM-450 machines from build number 0900 onward, fitted with the MC-4 controller and the dual-channel vapour concentration monitor.

---

## 1. Front Matter

### 1.1 Machine identification

The nameplate is riveted to the right-hand service panel, 1,500 mm above floor level, adjacent to the main isolator.

| Field | Value |
|---|---|
| Make and model | Realstar HM-450 |
| Serial number | RHM45-23-1182 |
| Build number | 1182 |
| Year of manufacture | 2023 |
| Nominal capacity | 18 kg dry garment weight |
| Solvent class | Hydrocarbon (isoparaffinic), Class 3 flammable liquid |
| Approved solvent | Solvex HC-560 or an equivalent approved under 9.2 |
| Supply | 415 V, 3 phase + N + E, 50 Hz, 14.8 kW connected |
| Date of installation | August 2023 |
| Installation site | Main Street Dry Cleaners, Shop 4, 118 Hargreaves Street, Bendigo VIC 3550 |

The machine is intended for the commercial cleaning of textile garments in a hydrocarbon solvent of flash point not less than 60 °C, and in particular for garments perchloroethylene is too aggressive for: beaded and sequinned work, leather and suede trim, bonded and coated fabrics, polyurethane-coated shells and delicate silks. It is not intended for any article contaminated with a solvent, fuel, oil, thinner or adhesive of flash point below 60 °C, with an oxidiser or pool chemical, or with loose particulate; nor for drying water-wetted articles; nor for any solvent other than one approved under 9.2.

**DANGER.** A garment carrying a low-flash-point contaminant can produce a flammable atmosphere inside the cage during drying, at a concentration and temperature the controls are not designed to detect in time. Any garment that arrives smelling of solvent, fuel or thinner is rejected at the counter.

Record the commissioning data in Appendix A before the machine is placed into production. A machine that has not had Appendix A completed and signed is not commissioned, whatever its state of assembly.

### 1.2 Revision history

| Revision | Date | Change |
|---|---|---|
| Rev 0 | June 2019 | First issue, build numbers 0400 – 0699 |
| Rev 1 | August 2021 | MC-3 controller, single-channel vapour monitor, builds 0700 – 0899 |
| Rev 2 | March 2023 | MC-4 controller, dual-channel vapour monitor, revised locked parameter set, builds 0900 onward |

Rev 1 is withdrawn. A Rev 1 manual must not be used with an MC-4 machine: the parameter numbering changed at Rev 2, the vapour monitor set points changed, and four fault codes were reassigned.

### 1.3 How to use this manual

**The operator** loads, runs and unloads the machine. Sections 6, 7, 8 and 11 are written for that reader. An operator may perform every task in the "Daily" and "Weekly" columns of section 10 and may clear any fault marked "Operator" in section 11. An operator may not open a service panel, enter the service menu, reset a safety lockout, or alter a locked parameter.

**The technician** is a person trained by Realstar or an authorised Realstar agent, holding the current service code, competent in electrical work to the level required by the Electricity Safety Act 1998 (Vic) and its regulations, and competent to work on equipment in a hazardous area under AS/NZS 60079.14. Sections 4, 5, 9, 10 and 12 assume that reader.

Read section 2 in full before operating the machine for the first time, and again after any change of solvent supplier, any change of operator, and after any incident. Section 2 is not background reading: it describes the difference between this machine and a perchloroethylene machine, and that difference is the reason this machine can burn.

Where a number in this manual disagrees with a number on a label fixed to the machine, stop and contact Realstar service. Do not guess which is right. Cross-references are given as "see 9.4", meaning section 9, subsection 4. Fault codes are given as F-nn, parameters as P-nn and programmes as PRG 1 to PRG 10, and each always means the same thing throughout this manual.

### 1.4 Symbols used in this manual and on the machine

**DANGER** — disregard will cause death or serious injury. Every DANGER in this manual concerns fire, explosion, electricity or entrapment. **WARNING** — disregard may cause injury. **CAUTION** — disregard may damage the machine, damage a garment, or put the machine out of compliance. **NOTE** — supporting information, no hazard.

Pictograms fixed to the machine, to AS 1319:

- Yellow triangle, flame — flammable liquid and vapour. At the loading door, both tank hatches, the button trap, the still door and the solvent fill point.
- Yellow triangle, lightning flash — electrical hazard. On the electrical enclosure door and the inverter housing.
- Yellow triangle, hand in rotating drum — entanglement. Inside the loading door frame.
- Yellow triangle, thermometer — hot surface. On the still body, the condenser, the steam manifold and the drying heat exchanger.
- Blue disc, goggles, gloves and boots — mandatory personal protective equipment. At the solvent fill point and the still door.
- Red disc, crossed cigarette — no ignition sources. At each corner of the hazardous zone boundary marked on the floor.
- Green square, running figure — emergency egress. On the plant room wall, not on the machine.

## 2. Safety

### 2.1 The defining difference: this machine holds a flammable liquid

The single most important fact about the HM-450 is that its solvent burns.

Perchloroethylene does not burn. A perchloroethylene machine such as a Union XL-800 carries hazards — the solvent is toxic, it is a scheduled substance, and its vapour will displace oxygen in a pit — but no operating condition of that machine produces a fire. Operators who have spent years on a perc machine carry habits that are safe there and are not safe here.

Hydrocarbon solvent is a Class 3 flammable liquid under the Australian Dangerous Goods Code and a Class C1 combustible liquid for AS 1940 storage classification, its flash point exceeding 60 °C. Both apply; neither is a reason to relax. The vapour behaves like petrol vapour: heavier than air, it flows downhill, pools in bunds, pits and floor wastes, and ignites from very modest energy. Everything in this section follows from that.

### 2.2 Flash point, LEL and why the numbers matter

**Flash point.** Solvex HC-560 has a flash point of 63 °C by Pensky-Martens closed cup to AS 2106.2. Below 63 °C the liquid does not give off vapour fast enough to form an ignitable mixture above its surface; at and above it, it does. Every temperature limit in this machine exists to keep solvent, and any surface wetted with solvent, below that figure with a margin. The minimum acceptable flash point in service is 60 °C; solvent testing below it must be removed and disposed of as prescribed industrial waste (9.7).

**Lower explosive limit.** The LEL of HC-560 vapour in air is 0.6 % by volume and the upper explosive limit is 6.5 %. Between them, any ignition source starts a flame front. The monitor reads in percent of LEL, not percent by volume: 25 % LEL is 0.15 % v/v.

| Condition | Reading | Machine response |
|---|---|---|
| Normal | 0 – 15 % LEL | No action |
| Elevated | 16 – 24 % LEL | Warning displayed, entry logged, cycle continues |
| High | 25 – 39 % LEL | F-03, drying heat isolated, cool-down forced, cycle ends |
| Lockout | 40 % LEL and above | F-04, all heating isolated, cage stopped in 8 s, door held locked, technician reset |

**Auto-ignition temperature.** 220 °C. No surface in the solvent-wetted path may exceed 200 °C under any fault condition; steam at the maximum permitted 620 kPa gauge gives a saturation temperature of 165 °C, which is the design basis for that limit.

**Boiling range.** 188 °C to 212 °C at atmospheric pressure. This figure is the reason the still runs under vacuum, and is dealt with at 5.3.

**Vapour density.** 4.9 times that of air. Released vapour falls. It does not disperse upward, it is not removed by a high-level fan, and it will travel along a floor to an ignition source metres away from where it was released.

### 2.3 Vapour concentration monitoring, and why this machine is not nitrogen-inerted

Two approaches keep a hydrocarbon machine out of the flammable range. **Inerting** blankets the working volume with nitrogen so that oxygen is held below the limiting oxygen concentration and no mixture can burn whatever the vapour concentration; those machines carry a nitrogen generator or cylinder bank, an oxygen analyser and a purge before every drying phase. **Temperature limitation with continuous vapour concentration monitoring** instead never allows the working volume to reach a temperature at which an ignitable mixture can form, and watches continuously to prove it has not.

**The HM-450 is not inerted. It carries no nitrogen supply and none must be connected to it.** Its protection against internal fire is: drying air temperature limited by the controller, by an independent thermostat and by a non-self-resetting thermal cut-out; continuous sampling of the working volume read as % LEL, with the responses tabulated at 2.2; continuous condensation of vapour during drying, so concentration falls rather than accumulates; and treatment of any failure of the monitor itself as a lockout (F-05) rather than a reason to keep running.

The sensor is a dual-channel unit: channel A is a catalytic bead element, channel B is a non-dispersive infrared element. The controller compares the two continuously. A disagreement of more than 8 % LEL sustained for 30 seconds raises F-05, because a monitor whose channels disagree cannot be trusted, and a monitor that cannot be trusted is the same as no monitor. Channel A has a service life of 36 months and channel B of 60 months; both are dated on the sensor head and both are replaced on age whether or not they still calibrate.

Machines built before build 0900 carried a single catalytic channel and are covered by Rev 1 of this manual. A single-channel head must not be fitted to an MC-4 machine.

**DANGER.** The vapour concentration monitor is the machine's primary fire safeguard. It must never be bypassed, disconnected, taped over, blanked in software, or "tested" with a solvent-soaked rag held to the sensor head. A machine that has failed self-test is out of service until a technician has repaired and recalibrated it.

### 2.4 Why the drying cycle is temperature-limited

Drying is the dangerous part of a hydrocarbon cycle. During the bath the garments are saturated and the vapour space is small and cool. During drying, warm air is deliberately passed through a load carrying twenty to thirty litres of solvent in order to evaporate it — by design, the deliberate generation of flammable vapour. The machine holds it in check three ways at once: air cool enough that evaporation is gradual, air moving fast enough that nothing stratifies, and condensation out of the air stream as fast as vapour is generated.

| Point | Normal | Controller limit | Thermostat | Cut-out |
|---|---|---|---|---|
| Drying air inlet to cage | 48 – 58 °C | 62 °C | 66 °C | 72 °C, manual reset |
| Cage outlet | 34 – 46 °C | 52 °C | 56 °C | — |
| Condenser outlet air | 18 – 26 °C | 32 °C | — | — |
| Still jacket surface | 118 – 132 °C | 140 °C | 150 °C | 165 °C, manual reset |

The controller limit is a software set point acting on the steam valve. The independent thermostat is a hard-wired capillary thermostat wired in series with the steam valve solenoid and the safety relay; it acts whether or not the controller is functioning. The thermal cut-out is a one-shot device that must be reset by hand at the machine, by a technician, after the cause has been found. The three devices are independent by design: no single failure, in software, in a probe or in a valve, can remove all three.

**CAUTION.** The HM-450 dries more slowly than a perchloroethylene machine of similar capacity because the drying air is 20 to 40 degrees cooler. More time is the correct remedy for a stubborn load. More heat is not, and the parameters that would allow it are locked (6.4).

### 2.5 Ignition sources

An ignitable atmosphere plus an ignition source equals a fire. The machine's job is to prevent the first. The plant's job is to prevent the second. Both are required and neither on its own is sufficient.

Prohibited inside the hazardous area defined at 2.7: smoking, vaping and naked flame of any kind, including a lighter in a pocket and the pilot flame of any appliance; portable electrical equipment not certified for the zone — torches, radios, chargers, fan heaters, vacuum cleaners, extension leads, portable lighting, battery tools; mobile telephones; hot work of any kind except under written permit after the machine has been drained, purged and gas-tested; space heaters, heat guns and halogen lamps; steel tools used so as to spark, non-sparking tools being required at the traps and hatches; static discharge (2.6); and vehicles, including electric pallet jacks, unless certified.

**DANGER.** The plant room floor waste, the bund and the pit beneath the still are the three places in the plant where vapour will collect if it is released. Never introduce any of the above into or over them, and never use a domestic wet-and-dry vacuum to clear a spill from them.

### 2.6 Static electricity

Solvent flowing through a hose, falling into a tank, or being filtered through a cartridge separates charge. So does a load of synthetic garments tumbling in a dry cage during the last minutes of drying. Static is the ignition source most often overlooked because it is invisible and free.

Solvent flowing through a hose, falling into a tank, or filtering through a cartridge separates charge. So does a load of synthetics tumbling in a dry cage in the last minutes of drying. Static is the ignition source most often overlooked, because it is invisible and free.

- Every conductive part of the machine is bonded to a common earth bar in 6 mm² green/yellow, and the bar is bonded to the building main earthing terminal. Continuity is verified at commissioning and annually to a maximum of 1 ohm between any two points, and the controller raises F-22 on failure.
- The cage is bonded to the frame by a separate braided strap, because a belt-driven shaft on a nylon-faced bearing is not a reliable earth path.
- **The drum must be clamped with the fill-point bonding clamp before the bung is opened, and the clamp must not be removed until the bung is closed.** This is the single measure that prevents a spark at the drum rim during transfer.
- Solvent is filled through the bottom-fill connection, never poured through an open hatch.
- Antistatic footwear is required in the plant; rubber-soled work boots insulate the wearer. Floors must not be polished with anything that raises surface resistivity, and the machine is wiped with a damp cotton cloth, never a dry synthetic one.

### 2.7 Hazardous area classification and zoning

The plant is classified under AS/NZS 60079.10.1. The classification for the HM-450 as installed, and the equipment requirements that follow from it under AS/NZS 60079.14, are set out below.

**Zone 0** — the interior of the solvent tanks, the still body, the filter housing and the solvent pipework. Only Ex ia intrinsically safe apparatus, category 1G: in practice the tank level probes and the still temperature probe, supplied through certified galvanic isolators in the safe-area section of the enclosure.

**Zone 1** — the interior of the cage and air circuit, the button and lint trap chambers, the space inside the machine enclosure below the level of the tank tops, and the interior of the bund. Equipment must be Ex d, Ex e, Ex p or Ex ia to category 2G.

**Zone 2** — a region extending 1.0 m in all directions from the loading door aperture, the button trap door, the lint trap door, the still door, the tank hatches and the solvent fill point; and a floor-level region extending 1.5 m horizontally from the machine footprint and 0.5 m above finished floor level, following the fall of the floor toward any bund or floor waste. Equipment must be at least Ex n or Ex ic to category 3G.

All electrical equipment in any zone must be certified for gas group IIA or better and temperature class T3 (maximum surface temperature 200 °C) or better. The zone boundary is marked on the floor in yellow and black hatching 100 mm wide and repeated on the wall at 1,500 mm. A verification dossier to AS/NZS 60079.14 clause 4 is held with the machine records and updated at each annual inspection.

**CAUTION.** Racking, trolleys, bins and finished garments must not be stored inside the marked zone. Apart from obstructing egress, they obstruct the low-level ventilation that keeps the zone a Zone 2 rather than a Zone 1.

### 2.8 Personal protective equipment

| Task | Eye | Hand | Body |
|---|---|---|---|
| Loading and unloading | — | — | Cotton apron |
| Button and lint trap cleaning | Safety glasses AS/NZS 1337.1 | Nitrile, 0.4 mm min | Apron |
| Filter cartridge change | Goggles, indirect vent | Nitrile gauntlets to elbow | Chemical-resistant apron |
| Solvent charging from drum | Goggles | Nitrile gauntlets | Chemical-resistant apron |
| Still residue removal | Goggles | Heat-resistant gauntlets | Chemical-resistant apron |
| Spill response, small | Goggles | Nitrile gauntlets | Coverall |
| Spill response, large | Full face shield | Nitrile gauntlets | Coverall, organic vapour respirator to AS/NZS 1716 |

Antistatic closed-toe footwear is worn at all times in the plant. Latex and PVC gloves are not acceptable for solvent contact; nitrile is specified because it resists isoparaffins, it still degrades, and gloves that have been in solvent contact are single-use.

Contaminated clothing is a wick and a fuel. Any garment or rag soaked in solvent must be removed immediately, placed in the lidded metal contaminated-rag bin, and not left on the machine, over a rail, or in a pocket.

### 2.9 Spill response

**Small spill — less than 5 litres, contained within the bund or on the floor inside the zone.** Stop the machine at the cycle stop button, not at the main isolator, whose switching contacts are a spark source. Prohibit entry and call out the spill. Switch nothing on or off and do not use a mobile phone in the zone. Confirm the extraction is running. Absorb with the pads and granulate from the wall-mounted spill kit, working from the outside inward, and place used absorbent in the lidded metal PIW bin. Gas-test at floor level before declaring the area clear; clear is below 5 % LEL. Record the spill in the plant log.

**Large spill — more than 5 litres, or any spill reaching a floor waste, drain or the laneway.** Evacuate the plant room and the retail front. Call 000 and state that there is a flammable liquid spill at a dry cleaning plant, naming the solvent and the approximate volume. Isolate electricity at the switchboard only if it is outside the zone and can be reached without passing through vapour. Notify the site emergency contact and the waste contractor. A spill reaching a drain is a reportable pollution incident: notify EPA Victoria on the 24-hour line as required under the Environment Protection Act 2017 (Vic), and notify the trade waste authority. Do not re-enter until a competent person has gas-tested the area clear at floor level.

### 2.10 Fire response

The machine carries an internal thermal-actuated extinguishing system: a 6 kg clean-agent cylinder discharging into the cage and the air duct, triggered by a 79 °C frangible bulb in the duct and by a manual pull at the front panel. Discharge raises F-33 and locks the machine out.

- **Fire inside the machine.** The internal system should discharge without intervention. If it has not, pull the manual actuator and evacuate. Do not open the loading door: that admits air to a fuel-rich fire and produces a flame front out of the aperture.
- **Fire outside the machine, small, with nothing between you and the exit.** Use the 9 kg dry chemical powder extinguisher (4A:80B:E) at the zone boundary, exit behind you. If it is not out in two discharges, leave.
- **Any fire you are not certain of.** Evacuate, close the plant room door, call 000, account for staff at the assembly point in the Bath Lane laneway.

Never use water on a solvent fire. Water is denser than the solvent, sinks beneath it, boils, and throws burning liquid.

After any discharge of the internal system the machine is out of service until a technician has inspected the cage, the duct, the bulb, the manifold and the electrical enclosure, recharged the cylinder, and cleared F-33 with the service code.

### 2.11 What must never be done

1. Never run the machine with the vapour concentration monitor disabled, disconnected, in fault, or overdue for calibration.
2. Never reset a safety lockout code (F-04, F-05, F-09, F-17, F-22, F-28, F-33, F-36) as an operator, and never ask a technician to reset one without finding the cause.
3. Never raise a locked temperature parameter, and never charge a solvent of flash point below 60 °C.
4. Never defeat the door interlock — not with a magnet, a cable tie, a screwdriver in the tongue, or a held plunger.
5. Never open the loading door while the cage is turning or above 40 °C, and never open the still, the filter housing or a tank hatch while the still is hot or under vacuum.
6. Never introduce a garment carrying petrol, thinner, adhesive, oxidiser or unidentified solvent.
7. Never store anything inside the marked hazardous zone, and never bring an uncertified electrical item into it, phones included.
8. Never transfer solvent without the bonding clamp fitted.
9. Never run the machine, or the still, when the plant is unoccupied, and never operate at all when the extraction is not running.
10. Never dispose of still residue, contaminated absorbent or used cartridges to sewer, stormwater or general waste, and never work alone in the plant room on a solvent-side task.

## 3. Specifications

### 3.1 Capacity and cage

| Item | Value |
|---|---|
| Nominal load, dry garment weight | 18 kg |
| Maximum load, delicate and at-risk classes | 9 kg (see 8.3) |
| Cage diameter × depth | 1,120 mm × 620 mm |
| Cage volume | 610 L |
| Cage material | AISI 304 stainless, 1.5 mm, electropolished, 3.5 mm perforation on 6 mm pitch |
| Lifter ribs | 3, radiused, 55 mm high |
| Loading door aperture | 620 mm diameter, sill 780 mm above floor |
| Wash speed | 32 rpm |
| Distribution speed | 120 rpm |
| Extract speeds | 250 rpm (approx. 39 g), 320 rpm (64 g), 380 rpm (90 g) |
| Drying tumble speed | 34 rpm, reversing |
| Cage drive | 4.0 kW inverter-driven, belt, Ex e motor, T3 |

### 3.2 Dimensions, weights and clearances

| Item | Value |
|---|---|
| Width × depth × height, overall | 1,850 × 1,420 × 2,240 mm |
| Height with still lifting eye | 2,310 mm |
| Footprint area | 2.63 m² |
| Minimum door opening for delivery | 1,950 mm wide × 2,300 mm high |
| Weight, dry, as delivered | 2,180 kg |
| Weight, charged and operating | 2,650 kg |
| Weight on heaviest foot, operating | 810 kg |
| Static floor loading, average | 1,008 kg/m² (9.9 kPa) |
| Minimum floor design load | 12 kPa uniformly distributed |

### 3.3 Electrical

| Item | Value |
|---|---|
| Supply | 415 V ± 6 %, 3 phase + N + E, 50 Hz |
| Connected load | 14.8 kW |
| Full load current | 26 A |
| Protective device | 32 A, C curve, 4 pole |
| Cable | 6 mm² four-core plus earth, copper |
| Residual current protection | 300 mA type S upstream |
| Prospective short-circuit rating | 10 kA |
| Control voltage | 24 V DC SELV; IS circuits through Ex ia IIA galvanic isolators |
| Earth bond, maximum any two points | 1.0 ohm |
| Main isolator | Lockable, 4 pole, 40 A, on zone boundary |
| Enclosure protection | IP54 |

### 3.4 Steam, air, water and drainage

| Service | Requirement |
|---|---|
| Steam pressure at machine | 550 – 620 kPa gauge |
| Steam consumption, peak / per cycle | 65 kg/h / 26 kg |
| Steam connection | DN25 flanged PN16; condensate DN20 to trap and return |
| Compressed air | 550 – 700 kPa, 90 L/min FAD, ISO 8573-1 class 3.4.3, 3/8 in BSP |
| Cooling water flow | 25 L/min at 400 – 600 kPa, DN20 in and out |
| Cooling water inlet temperature, maximum | 18 °C (outlet typically 31 °C) |
| Cooling water per cycle | 900 – 1,400 L, recirculated through the plant chiller |
| Machine drain | DN40 to bunded interceptor, never direct to sewer |
| Water separator discharge | 4 – 9 L per cycle to the separated-water tank |

### 3.5 Solvent, tanks and still

| Item | Value |
|---|---|
| Approved solvent | Solvex HC-560 isoparaffinic hydrocarbon |
| Flash point, closed cup, AS 2106.2 | 63 °C (minimum acceptable in service 60 °C) |
| Boiling range at atmospheric pressure | 188 – 212 °C |
| Density at 15 °C | 0.766 kg/L |
| Kauri-butanol value | 27 |
| Explosive limits | 0.6 % v/v lower, 6.5 % v/v upper |
| Auto-ignition temperature | 220 °C |
| Vapour density relative to air | 4.9 |
| Total solvent charge, first fill | 420 L |
| Tank 1 and Tank 2, each | 190 L working, 210 L to overflow |
| Base tank / still charge / filter housing | 40 L / 80 L / 34 L |
| Typical operating inventory | 380 – 400 L |
| Typical top-up rate | 1.4 – 2.0 L per 100 kg of garments |
| Target mileage | not less than 55 kg garments per litre consumed |

### 3.6 Distillation and recovery

| Item | Value |
|---|---|
| Still type | Steam-jacketed batch still, vacuum operation |
| Still working pressure | 4 – 8 kPa absolute |
| Vacuum source | Water ring pump, 0.75 kW, Ex e |
| Boiling temperature under vacuum | 95 – 112 °C |
| Jacket steam pressure | 550 kPa maximum |
| Still throughput | 62 L/h |
| Still cycle, full batch | 78 minutes including charge and drain |
| Residue drawn per full batch | 1.5 – 3.5 L |
| Still condenser | Shell and tube, stainless, 6.4 m² |
| Drying recovery condenser | Finned tube, chilled water, 11.2 m² |
| Water separator | Gravity, 22 L, baffled, sight glass |
| Carbon polishing unit | 18 kg activated carbon |

### 3.7 Filtration and circulation

| Item | Value |
|---|---|
| Filter type | Cartridge, carbon-core, disposable |
| Cartridges fitted | 3, part RS-HM4-4021 |
| Filter area, total | 6.9 m² |
| Clean differential pressure | 25 – 45 kPa |
| Change differential pressure | 220 kPa |
| Change interval, whichever first | 220 kPa, 1,600 kg garments, or 3 months |
| Button trap | 6 L stainless basket, 2 mm perforation |
| Lint trap | 0.42 m² stainless mesh, 0.6 mm aperture |
| Solvent pump | Centrifugal, 1.5 kW, 180 L/min at 250 kPa, Ex e |

### 3.8 Drying, cycle times and noise

| Item | Value |
|---|---|
| Drying air flow | 1,150 m³/h |
| Drying air inlet, normal | 48 – 58 °C |
| Drying air inlet, controller limit | 62 °C |
| Independent thermostat | 66 °C |
| Thermal cut-out, manual reset | 72 °C |
| Cage outlet, normal | 34 – 46 °C |
| Cool-down end point | 28 °C at cage outlet, or 6 minutes, whichever later |
| Door release temperature | 40 °C |
| Shortest factory cycle (PRG 8) | 38 minutes |
| Longest factory cycle (PRG 6) | 72 minutes |
| Typical general-wear cycle (PRG 1) | 54 minutes |
| Cycles per 8-hour shift, general wear | 8 |
| Sound pressure at 1 m, wash | 62 dB(A) |
| Sound pressure at 1 m, extract 380 rpm | 68 dB(A) |

### 3.9 Environmental and duty limits

| Item | Value |
|---|---|
| Ambient temperature, operating | 5 – 38 °C |
| Ambient relative humidity, operating | 20 – 80 %, non-condensing |
| Maximum altitude | 1,000 m |
| Duty rating | Continuous, 12 cycles per day maximum |
| Maximum still batches per day | 4 (P-10) |
| Design life, mechanical | 20,000 cycles |
| Cage bearing design life | 25,000 hours |
| Solvent pump seal design life | 8,000 hours |
| Vapour sensor channel A service life | 36 months |
| Vapour sensor channel B service life | 60 months |
| Controller battery service life | 5 years |
| Sound pressure at operator position, cycle average | 64 dB(A) |
| Heat rejection to plant room | 2.4 kW average, 4.1 kW peak |
| Machine standby power | 180 W |
| Typical electricity, per cycle | 3.8 kWh |
| Typical steam, per cycle | 26 kg |
| Typical solvent, per cycle at 15 kg load | 0.25 L |

---

## 4. Installation and Services

Installation is a technician task. What follows is the specification the installer works to, and the record the operator's employer must be able to produce on request.

### 4.1 Floor and position

The machine requires a level, non-absorbent, chemically resistant floor rated to not less than 12 kPa uniformly distributed, with a local point capacity of 900 kg over a 140 mm diameter pad. A suspended slab must be assessed by a structural engineer before positioning. Level tolerance is 3 mm across the footprint in any direction; out-of-level beyond this produces cage imbalance faults (F-11) at extract.

The floor within the zone must be a conductive epoxy or equivalent with a measured surface resistance between 5 × 10^4 and 1 × 10^8 ohms, coved 100 mm up the wall, falling not more than 1:100 toward the bunded interceptor. There must be no floor waste, gully, pit or duct inside the zone that is not part of the bund. Existing floor wastes inside the zone are sealed permanently with a bonded plate, not covered with a mat.

### 4.2 Clearances

| Face | Minimum clearance | Reason |
|---|---|---|
| Front | 1,200 mm | Loading, trolley access, egress |
| Right (service side) | 1,000 mm | Enclosure door swing, filter withdrawal |
| Left | 600 mm | Ventilation |
| Rear | 900 mm | Condenser, still access, pipework |
| Above | 500 mm | Still lifting eye, duct removal |

Beyond the physical clearances, the Zone 2 envelope described at 2.7 must be free of stored goods, racking, cabling, sockets and non-certified equipment. Where the 1.5 m floor-level zone would extend under a bench or into a doorway, that region is either included in the zone and marked, or physically separated by a vapour-tight barrier to floor level. It cannot be ignored because it is inconvenient.

### 4.3 Ventilation

The plant room must have mechanical ventilation providing not less than 10 air changes per hour with the machine running, drawn at low level. At least two extract points are required, each with the grille centre not more than 200 mm above finished floor level, because the vapour is 4.9 times the density of air and will not be removed by a high-level fan.

| Item | Requirement |
|---|---|
| Air changes, running / idle | 10 per hour / 4 per hour continuous |
| Extract face velocity at low-level grille | not less than 0.5 m/s |
| Fan | Certified for Zone 2, non-sparking impeller, motor outside the airstream |
| Interlock | Cycle will not start unless extraction airflow is proved; failure raises F-20 |
| Make-up air | Free area not less than 0.35 m², from outside, at high level |
| Discharge | To outside air, not less than 3 m from any opening, intake or ignition source |

Extraction runs continuously during trading hours and for at least 30 minutes after the last cycle ends. The extraction fan is on its own circuit, is not switched by the machine isolator, and its circuit breaker is labelled and locked in the on position at the switchboard.

Air change rate is verified at commissioning by measurement, not by calculation from fan data, and is re-measured at each annual inspection. A plant room of 168 m² floor area at 3.6 m ceiling height has a volume of about 605 m³, so 10 air changes per hour requires an extract rate of about 6,050 m³/h.

### 4.4 Bunding

The machine sits within a bund formed in the floor, kerbed 100 mm, sealed, of not less than 500 L capacity, which exceeds the machine's largest single vessel plus its filter housing. The bund drains to a bunded interceptor. There is no direct connection from any part of the machine or the bund to sewer or stormwater at any point.

The separate solvent store holds 2 × 200 L drums within its own bund of not less than 220 L capacity, being 110 % of the largest container. The store is ventilated at low level, is within the classified area, carries its own zone marking, and is signed in accordance with AS 1940. Drums are stored upright with bungs uppermost, on a drum stand, never on their side and never stacked.

### 4.5 Steam and condensate

Steam is taken from the plant boiler through a DN25 branch off the top of the main, with an isolating valve, Y-strainer, separator and trap set on the drop leg ahead of the machine's reducing station. The machine's reducing valve is set to 600 kPa; the safety valve downstream is set to 700 kPa and piped to a safe discharge point outside the zone.

Condensate leaves through a float and thermostatic trap sized for 65 kg/h at the operating differential, with a check valve, and returns to the boiler feed tank. Condensate must not be dumped into the bund or the interceptor, both because of the thermal load and because a condensate line is a route by which solvent could reach the sewer if a heat exchanger ever failed.

Steam and condensate lines within the zone are lagged to keep external surface temperature below 60 °C where they are within reach, and in all cases below 200 °C, being the T3 limit. Lagging is a non-combustible mineral fibre with a foil or metal cladding; combustible foam lagging must not be used inside the zone.

### 4.6 Electrical, earthing and bonding

Supply is a dedicated final subcircuit from the plant switchboard through a lockable four-pole isolator on the zone boundary at 1,500 mm, positioned so it can be operated from outside the zone. Wiring within the zone is to AS/NZS 60079.14: heavy duty conduit or Ex-certified gland and cable, no flexible cord, no plug and socket, no uncertified junction box.

Earthing and bonding: machine main earth 6 mm² minimum to the machine earth bar; equipotential bonding of frame, tank shells, still, filter housing, pipework, door frame, cage strap, duct and bund kerb reinforcement to that same bar; a bond from the bar to the building main earthing terminal, tested at commissioning and annually; maximum 1.0 ohm between any two bonded points; monthly continuity test of the fill-point bonding clamp lead (10.3); intrinsically safe circuits earthed at one point only, at the galvanic isolator, wiring segregated and identified light blue.

**DANGER.** Do not connect the machine through a general purpose outlet, an extension lead, or a plug and socket of any kind. Do not add a socket, a light fitting or a switch inside the zone during or after installation without a revision of the hazardous area verification dossier.

### 4.7 Commissioning checklist

All items must be signed before the first production cycle. The completed checklist is Appendix A.

1. Delivery inspection; no transit damage; nameplate matches order.
2. Machine level within 3 mm, feet locked, footprint within bund; clearances to 4.2; zone marked; floor surface resistance in range.
3. Ventilation commissioned; air change rate and low-level face velocity measured; F-20 proved by disabling the fan.
4. Bund capacity confirmed; no connection to sewer or stormwater; interceptor in place.
5. Steam 550 – 620 kPa at the machine; safety valve set and lifted; trap proved; lagging complete. Air and cooling water measured.
6. Supply voltage, phase rotation and earth loop impedance recorded; bond continuity 1.0 ohm or less; insulation resistance at 500 V DC not less than 1 MΩ.
7. Hazardous area verification dossier prepared to AS/NZS 60079.14 clause 4, with an equipment schedule naming every item in every zone and its certificate number.
8. Vapour monitor calibrated on both channels against certified 50 % LEL span gas; certificate filed; F-04 lockout, door hold and service-code reset all proved with gas.
9. Door interlock tested on both channels, individually and together; F-28 proved. Thermal cut-outs proved at 72 °C and 165 °C with manual reset.
10. Extinguishing system pressure checked, bulb intact, manual actuator proved without discharge, cylinder tare weight recorded.
11. Solvent charged to 420 L through the bottom-fill connection with bonding clamp fitted; docket, safety data sheet and certificate of analysis flash point filed.
12. Still run on a full batch; vacuum in range; condensate clear; residue drawn and weighed; water separator proved with no carryover.
13. Test cycles on rag load: PRG 1, PRG 4 and PRG 8, with times, temperatures and vapour readings recorded.
14. Operator training delivered and signed; manual, safety data sheet, dossier, spill kit, extinguisher and portable detector present; maintenance schedule entered with first due dates.

15. Portable gas detector supplied, calibrated, and its calibration due date recorded.
16. Emergency stop function proved from each of the two actuators; restart after twist-release confirmed to require a deliberate START.
17. Anti-crease tumble, buzzer and end-of-cycle alarm proved.
18. Event log confirmed to be recording, clock set to local time, log export to USB proved.
19. Zone floor marking, wall marking and signage photographed and the photographs filed with the dossier.
20. Machine handed over, checklist countersigned by the site's responsible person, and one copy returned to Realstar.

### 4.8 Services connection schedule

| Service | Connection | Position | Provided by |
|---|---|---|---|
| Electrical supply | 6 mm² four-core and earth to terminal box | Rear right, 1,900 mm AFFL | Site |
| Steam | DN25 flange PN16 | Rear centre, 1,200 mm AFFL | Site |
| Condensate | DN20 BSP female | Rear centre, 300 mm AFFL | Site |
| Compressed air | 3/8 in BSP female | Right side, 1,500 mm AFFL | Site |
| Cooling water in | DN20 BSP female | Rear left, 600 mm AFFL | Site |
| Cooling water out | DN20 BSP female | Rear left, 750 mm AFFL | Site |
| Machine drain | DN40 spigot | Base, left rear, into bund | Site |
| Separated water out | 20 mm hose tail | Right side, 900 mm AFFL | Machine |
| Solvent fill | 40 mm dry-break coupling with bonding clamp | Left side, 700 mm AFFL | Machine |
| Still residue draw-off | 50 mm valve | Rear, 500 mm AFFL | Machine |

## 5. Machine Description

### 5.1 Layout

The HM-450 is a two-tank, closed-circuit machine. Solvent is never deliberately vented to atmosphere and there is no external exhaust from the drying circuit.

The main assemblies, front to back, are: the loading door and cage in a welded stainless shell; the base tank beneath the cage; the button trap on the front lower left; the pump and filter housing on the right-hand service side; Tank 1 and Tank 2 side by side across the rear at low level; the still, its condenser and the vacuum pump above the tanks at the rear; and the drying circuit — fan, chilled-water recovery condenser, steam heat exchanger, lint trap and ducting — across the top.

### 5.2 The two tanks

**Tank 2 is the working tank.** It holds filtered solvent, fit for a general wash bath but carrying dissolved soil and some colour. Most first baths are drawn from Tank 2. **Tank 1 is the distilled tank.** It holds solvent from the still condenser by way of the water separator: clean, clear and colourless. Rinse baths, and the first bath of any programme flagged "distilled first bath", are drawn from Tank 1. Bath direction is set per bath in the programme, not per cycle.

The tanks are cross-connected through a manual transfer valve for maintenance only. That valve is wire-locked closed in production and its position is checked weekly.

Level in each tank is read by an intrinsically safe capacitive probe with four set points: low-low (F-14 raised, pump inhibited), low (top-up prompt at P-08), high (still charge inhibited), and high-high (F-15 raised, overflow risk). The still will not charge from a tank that is below the low set point and will not discharge into a tank that is above the high set point.

Tank contents are not interchangeable in the operator's judgement. A rinse bath drawn from Tank 2 because Tank 1 is low will grey a wedding gown, and the fault will not be visible until the garment is finished.

### 5.3 Distillation under vacuum, and why it is not optional

Hydrocarbon solvent boils between 188 °C and 212 °C at atmospheric pressure — well above its own flash point of 63 °C, and above the temperature at which soils, sizes, dyes and residues crack and char. A still boiling this solvent at atmospheric pressure would need a jacket surface above 220 °C, which is the solvent's auto-ignition temperature; it would bake the residue into a hard carbonised deposit; and it would degrade the solvent itself, dropping its flash point over time.

Under a vacuum of 4 – 8 kPa absolute the same solvent boils at 95 – 112 °C. The jacket then runs at 118 – 132 °C on 550 kPa steam, so no surface in the still approaches auto-ignition; residue draws off as a pourable sludge at 1.5 – 3.5 L per batch rather than baking on; the solvent is not thermally stressed, so its flash point does not drift downward in service; and the still can run alongside cleaning cycles rather than only at shutdown.

Vacuum is produced by a water ring pump drawing through the condenser, and is proved before the jacket steam valve will open. If vacuum is not achieved within 6 minutes of the pump starting, or is lost during a batch, the steam valve closes and F-16 is raised. **The still must never be run with the jacket hot and no vacuum.** The interlock that prevents it is locked at P-37.

### 5.4 Filtration, button trap and lint trap

Solvent leaving the cage passes the button trap, then the pump, then the filter housing, then returns to the cage or to tank. Every part of that path is Zone 0 internally and is bonded externally.

The **button trap** is a stainless basket in a chamber with a bayonet door on the lower left front. On this machine it earns its keep: beaded and sequinned work sheds constantly, and a bead in the pump is a seized pump. It is emptied every cycle on delicate programmes and at least twice a day otherwise.

The **filter housing** holds three carbon-core cartridges, part RS-HM4-4021. The carbon adsorbs dyes and fatty soils; the pleated medium retains particulate to 20 micron. Cartridges are changed at 220 kPa differential, 1,600 kg of garments, or three months, whichever comes first.

The **lint trap** sits in the return leg of the drying air circuit ahead of the recovery condenser: a 0.42 m² stainless mesh panel withdrawn through a door on the right-hand upper panel. A blocked lint trap is the most common single cause of slow drying, high drying temperature and F-08.

### 5.5 Cage, door and interlock

The cage is stainless and electropolished so that beading and sequin work does not catch, with three radiused lifters rather than the square lifters used on general-purpose machines. Cage speed is set by an inverter and is programme-controlled at every stage, including a controlled ramp into and out of extract to limit the shock load on decorated garments.

The loading door is gasketed, with a two-stage handle and an electromechanical solenoid lock monitored on two independent channels: channel A a positively driven mechanical position switch, channel B a coded magnetic sensor reading a unique tag in the door. Both are read by the safety relay and both must agree. A disagreement, a short across either channel, or a single-channel failure raises F-28 and locks the machine out.

The lock releases only when all of the following are true: the cage has been stationary for 10 seconds; cage outlet temperature is below 40 °C; the vapour reading is below 10 % LEL; there is no liquid level in the base tank; and no fault is active.

**DANGER.** Defeating the interlock exposes the operator to a rotating cage and opens a hot, vapour-rich volume to the room. Every method of defeating it — magnet, cable tie, screwdriver, jammed plunger, bridged terminal — is detectable in the event log, and every one of them voids the warranty immediately and completely.

### 5.6 Vapour concentration monitor

The monitor draws a continuous sample from the cage outlet duct through a sintered filter and a knock-out pot and reads it on two channels as described at 2.3. The sample line is heated to 45 °C to prevent condensation. The reading is displayed on the main screen at all times, in % LEL, to one decimal place.

Self-test runs at every power-up and at the start of every cycle: the sample pump is proved by flow switch, the sample line is proved by a pressure step, and both channels are zeroed against the room reference. Self-test takes 45 seconds. It cannot be skipped and it cannot be shortened.

Span calibration against certified 50 % LEL gas is a technician task, due every 12 months, and is a safety-critical item under 10.6. The controller displays a countdown for the last 30 days and raises F-36, a lockout, at expiry.

### 5.7 Drying and recovery circuit

Air is drawn from the cage through the lint trap, across the chilled-water recovery condenser, through the carbon polishing unit, over the steam heat exchanger, and back into the cage. Nothing is exhausted to the room or to atmosphere.

The recovery condenser is the component that decides whether the cycle is safe and whether it is economic. It condenses solvent out of the returning air, dropping the air's solvent load before it is reheated and sent back through the load. When it is working, the vapour reading during drying sits between 8 % and 18 % LEL and falls steadily through cool-down. When it is fouled, under-cooled or starved of water, the reading climbs, drying stalls, mileage falls, and F-03 and F-08 follow in that order.

Condensed solvent and condensed water fall together into the water separator.

### 5.8 Water separator and separated water

The separator is a 22 L baffled gravity vessel with a sight glass. Solvent floats; water sinks and leaves through the water leg to the separated-water tank. Four to nine litres of water leave the machine per cycle, drawn out of the garments themselves and out of the air.

Separated water is not clean water. It is saturated with hydrocarbon and it is trade waste at best and prescribed industrial waste at worst. It must be held in the separated-water tank and removed by the waste contractor, or discharged only under and within the limits of the site's trade waste agreement. It must never be tipped down a floor waste, a laundry trough or the yard drain.

A separator that is flooded, or whose water leg is blocked, sends water into Tank 1. Water in the solvent shows as cloudy distillate, poor cleaning, rust marks on garments carrying steel trim, and eventually corrosion in the still. Check the sight glass weekly and drain the water leg.

## 6. Control Panel and Display

### 6.1 Key layout

The panel is a 178 mm colour display with eight membrane keys below it and three discrete controls to the right. From the left: **PRG** selects a programme; **▲** and **▼** scroll; **ENTER** confirms; **MENU** enters the menu tree; **ESC** steps back one level; **RESET** clears a cleared fault; **INFO** shows the live reading page. The discrete controls are the illuminated green **START**, the amber **STOP** (ends the cycle at the next safe step and forces cool-down), and the red mushroom-head **EMERGENCY STOP**, a latching twist-release device wired directly to the safety relay and not through the controller.

A second emergency stop is mounted on the plant room wall at the zone boundary, at 1,400 mm, so that the machine can be stopped from outside the zone. Both are wired in series on both channels of the safety relay.

The main screen shows, at all times: programme number and name, stage in progress, elapsed and remaining time, cage temperature, drying inlet temperature, vapour reading in % LEL, filter differential pressure, and the levels of Tank 1 and Tank 2. If any of those figures is not displayed, the machine is not fit to run.

**NOTE.** The emergency stop drops all motive and heating power and closes the steam valves, but it does not release the door. The door remains locked until the release conditions at 5.5 are met. This is intentional: an emergency stop during drying leaves a hot, vapour-rich cage, and that is the last moment at which it should be opened.

### 6.2 Menu tree

```
MENU
 ├─ 1  Programmes         1.1 Select   1.2 Copy   1.3 Edit (service code)
 ├─ 2  Still              2.1 Start batch   2.2 Drain residue   2.3 Status
 ├─ 3  Solvent            3.1 Tank levels   3.2 Top up   3.3 Transfer (service code)
 ├─ 4  Filters            4.1 Differential  4.2 Reset kg counter  4.3 History
 ├─ 5  Logs               5.1 Cycles  5.2 Faults  5.3 Vapour  5.4 Export to USB
 ├─ 6  Counters           6.1 Cycles  6.2 Kilograms  6.3 Hours  6.4 Solvent added
 ├─ 7  Settings           7.1 Time and date  7.2 Language  7.3 Display  7.4 Buzzer
 ├─ 8  Parameters         8.1 Open list  8.2 Locked list (service code)
 └─ 9  Service            9.1 Calibration  9.2 I/O test  9.3 Lockout reset  9.4 Version
```

Menus 1.3, 3.3, 8.2 and the whole of menu 9 require the six-digit service code. The code is issued to trained technicians, is specific to the machine's build number, and must not be written on or near the machine. Three incorrect entries lock code entry for 30 minutes and write an entry to the fault log.

### 6.3 Open parameters

These may be adjusted by a supervisor without a service code. Every change is logged with a timestamp and the operator identifier, and the log is read at each service visit.

| Ref | Parameter | Default | Range |
|---|---|---|---|
| P-01 | Buzzer volume | 3 | 0 – 5 |
| P-02 | End-of-cycle alarm duration | 20 s | 0 – 120 s |
| P-03 | Display brightness | 70 % | 20 – 100 % |
| P-04 | Language | English | English, Italian |
| P-05 | Date format | dd/mm/yyyy | dd/mm/yyyy, mm/dd/yyyy |
| P-06 | Filter change warning threshold | 190 kPa | 120 – 210 kPa |
| P-07 | Filter kilogram warning | 1,450 kg | 800 – 1,590 kg |
| P-08 | Tank low top-up prompt | 130 L | 110 – 165 L |
| P-09 | Still auto-start after cycle | Off | Off, On |
| P-10 | Still batches per day, maximum | 4 | 1 – 6 |
| P-11 | Drying extension increment | 3 min | 1 – 5 min |
| P-12 | Cool-down extension | 0 min | 0 – 6 min |
| P-13 | Anti-crease tumble after cycle | 8 min | 0 – 20 min |
| P-15 | Load weight prompt | On | Off, On |
| P-16 | Button trap prompt interval | 4 cycles | 1 – 10 cycles |
| P-20 | Operator identifier prompt | On | Off, On |

| P-21 | Weekly log reminder day | Fri | Mon – Sat |
| P-22 | Filter change reminder repeat | Daily | Off, Daily, Weekly |
| P-23 | Vapour trend display | On | Off, On |
| P-24 | Still auto-start delay after cycle end | 10 min | 0 – 60 min |

### 6.4 Locked parameters

These are the safety interlock parameters. They may be viewed by anyone through menu 8.2 but altered only under the service code, and every alteration writes an indelible entry to the fault log recording the old value, the new value, the date and the code used.

| Ref | Parameter | Factory value | Permitted range |
|---|---|---|---|
| P-30 | Drying air inlet limit | 62 °C | 48 – 62 °C |
| P-31 | Cage outlet limit | 52 °C | 40 – 52 °C |
| P-32 | Vapour warning set point | 25 % LEL | 15 – 25 % LEL |
| P-33 | Vapour lockout set point | 40 % LEL | 25 – 40 % LEL |
| P-34 | Door release temperature | 40 °C | 30 – 40 °C |
| P-35 | Door release vapour threshold | 10 % LEL | 5 – 10 % LEL |
| P-36 | Still jacket limit | 140 °C | 120 – 140 °C |
| P-37 | Still vacuum interlock | 8 kPa abs | 4 – 8 kPa abs |
| P-38 | Vapour monitor self-test | Enabled | Enabled only |
| P-39 | Extraction airflow interlock | Enabled | Enabled only |

| P-40 | Cage stop time on lockout | 8 s | 4 – 8 s |
| P-41 | Sample line heater set point | 45 °C | 40 – 45 °C |
| P-42 | Channel disagreement threshold | 8 % LEL | 4 – 8 % LEL |
| P-43 | Channel disagreement delay | 30 s | 10 – 30 s |

**DANGER.** P-30 to P-37 may be lowered but never raised above the factory value. P-38 and P-39 have one permitted value and the "Enabled only" entry is not a formality: the controller will refuse any other entry and will raise F-35 if the stored value is found corrupted at power-up. A technician who is asked to raise a limit "just for this load" must refuse. The correct remedy for a load that will not dry is more time, not more heat.

### 6.5 Logs and counters

Three logs are held and none of them can be cleared, by anyone, at any access level.

- **The cycle log** records every cycle: date, time, operator identifier, programme, load weight if entered, stage times, peak drying temperature, peak vapour reading and any fault raised. It holds 20,000 cycles and overwrites oldest-first.
- **The fault log** records every fault and every warning with a timestamp, the stage in progress and the reading that caused it, together with every lockout reset, every service code entry, every failed service code entry, and every change to any parameter, open or locked. It holds 5,000 entries and does not overwrite; when it is full the controller raises a warning and a technician must archive it.
- **The vapour log** records the monitor reading at 10-second intervals for the last 90 days, both channels, together with every self-test result and every calibration.

All three export to USB through menu 5.4 in the format set at P-18. The plant should export monthly and file the export. After any incident these logs are the primary evidence of what the machine was doing, and they are the first thing a Realstar technician, an insurer or a regulator will ask for.

---

## 7. Programmes

Ten factory programmes are stored. They may be selected and copied by an operator; they may be edited only under the service code. Copies are stored as PRG 11 to PRG 20 and are the correct place for any site-specific variation.

| PRG | Name | Baths | Mechanical action | Extract |
|---|---|---|---|---|
| 1 | General wear | 2 (T2, T1) | Normal, 32 rpm continuous | High, 380 rpm, 4 min |
| 2 | Heavy soil / workwear | 3 (T2, T2, T1) | Normal, 32 rpm continuous | High, 380 rpm, 5 min |
| 3 | Wool and knitwear | 1 (T1) | Gentle, 28 rpm, 12 s on / 8 s off | Medium, 320 rpm, 3 min |
| 4 | Beaded and sequinned | 1 (T1) | Very gentle, 24 rpm, 8 s on / 20 s off | Low, 250 rpm, 2 min |
| 5 | Leather trim and suede trim | 1 (T1) | Very gentle, 24 rpm, 8 s on / 20 s off | Low, 250 rpm, 2 min |
| 6 | Wedding gown | 2 (T1, T1) | Very gentle, 22 rpm, 6 s on / 24 s off | Low, 250 rpm, 2 min |
| 7 | Silk and fine drape | 1 (T1) | Gentle, 26 rpm, 10 s on / 15 s off | Low, 250 rpm, 3 min |
| 8 | Bonded and coated fabric | 1 (T1) | Gentle, 26 rpm, 10 s on / 15 s off | Medium, 320 rpm, 3 min |
| 9 | Down and feather | 2 (T2, T1) | Normal, 30 rpm continuous | Medium, 320 rpm, 4 min |
| 10 | Refresh / no-bath deodorise | 0 | Gentle, 26 rpm continuous | None |

| PRG | Bath temp | Bath time | Drying inlet | Dry time | Cool-down | Total |
|---|---|---|---|---|---|---|
| 1 | Ambient | 8 + 4 min | 58 °C | 22 min | 6 min | 54 min |
| 2 | Ambient | 10 + 6 + 4 min | 58 °C | 24 min | 6 min | 66 min |
| 3 | Ambient, max 26 °C | 6 min | 48 °C | 20 min | 8 min | 48 min |
| 4 | Ambient, max 24 °C | 5 min | 42 °C | 24 min | 10 min | 56 min |
| 5 | Ambient, max 24 °C | 4 min | 40 °C | 26 min | 10 min | 57 min |
| 6 | Ambient, max 24 °C | 6 + 5 min | 40 °C | 30 min | 12 min | 72 min |
| 7 | Ambient, max 24 °C | 5 min | 44 °C | 22 min | 8 min | 51 min |
| 8 | Ambient, max 22 °C | 5 min | 38 °C | 28 min | 12 min | 60 min |
| 9 | Ambient | 8 + 5 min | 52 °C | 34 min | 8 min | 68 min |
| 10 | — | — | 46 °C | 20 min | 8 min | 38 min |

### 7.1 Notes on the at-risk classes

**PRG 4, beaded and sequinned.** The risk is mechanical, not chemical: beads chip, sequins craze and thread abrades. Use a net bag for anything beyond light applied decoration, never exceed 9 kg, and check the button trap after every cycle. If a sequin is soft to a fingernail at room temperature, the garment goes to hand spotting, not to the machine.

**PRG 5, leather and suede trim.** For trim only; a whole leather garment goes to a specialist. The low bath temperature and low extract protect the trim's finish, and the long cool dry stops the trim shrinking away from the cloth it is stitched to.

**PRG 6, wedding gown.** Two distilled baths, because a gown shows the least colour pickup. One gown per load regardless of weight. Remove or protect detachable beading, buttons and hooks first.

**PRG 7, silk and fine drape.** The bath is short because prolonged agitation in any solvent will dull a silk's lustre and can set a permanent crease in a heavy satin. Do not extend the bath. If the garment is not clean, spot it and re-run rather than running longer.

**PRG 8, bonded and coated fabric.** The lowest drying temperature in the set, because heat softens the adhesive layer and delamination is not repairable. Do not extend drying beyond two increments of P-11; if the garment is still damp, unload and air it on the rail.

**PRG 9, down and feather.** The longest drying time in the set and the largest cage volume per kilogram, because down insulates and holds solvent in the quill. Load no more than 6 kg. Down that is still damp will smell within two days, so run the full cycle and check by hand at the seam, not at the surface.

**PRG 10, refresh.** No bath, warm tumble only, for garments that need deodorising and pressing rather than cleaning. Because there is no bath there is no solvent to condense, so the vapour reading should stay below 5 % LEL throughout. A reading above that on PRG 10 means solvent is coming off residue in the cage, and the machine needs a cage wipe-down.

### 7.2 Creating a site programme

Copy an existing factory programme to a free slot between PRG 11 and PRG 20 through menu 1.2, then edit the copy under the service code. Never edit a factory programme: it is the reference the technician works from when a fault is being diagnosed.

The following may be edited in a copy: number of baths, bath source tank, bath time, mechanical action pattern, extract speed and time, drying time, cool-down time and anti-crease behaviour. The following may not be edited at any access level, because they are derived from locked parameters: drying air inlet limit, cage outlet limit, door release conditions, vapour set points and cool-down end point.

Record every site programme on a card kept at the machine, giving the slot number, the name, the class of garment it is for, the date it was created, who authorised it, and the factory programme it was copied from.

## 8. Daily Operation

### 8.1 Start of day

1. Confirm the plant room extraction is running and that the low-level grilles are unobstructed.
2. Walk the zone. Nothing stored inside the marking, no trolleys, no garments, floor dry, spill kit and extinguisher in place and unobstructed.
3. Check the bund is clear and dry.
4. Confirm steam pressure at the machine gauge is 550 – 620 kPa, air pressure 550 – 700 kPa, cooling water flowing.
5. Power up at the isolator and let the vapour monitor self-test complete (8.2).
6. Read Tank 1 and Tank 2 levels. Both should be above the P-08 prompt level.
7. Read filter differential. If above P-06 the filters are due today.
8. Empty the button trap and check the lint trap.
9. Enter the operator identifier when prompted.

### 8.2 Vapour sensor self-test

Self-test runs automatically on power-up and takes 45 seconds. The display shows, in order: `SENSOR TEST — PUMP`, `SENSOR TEST — LINE`, `SENSOR TEST — CH A`, `SENSOR TEST — CH B`, then `SENSOR OK` with the two channel readings and the date the next span calibration falls due.

The operator must watch this sequence to its end and initial the daily log. If the display shows `SENSOR FAIL`, or if either channel reads other than 0.0 ± 0.5 % LEL at the end of the test, or if the calibration due date has passed, the machine is out of service. Tag it, tell the supervisor, and call service. Do not power-cycle the machine repeatedly to try to get a pass: a monitor that passes on the fourth attempt has not passed, and every attempt is in the log.

### 8.3 Load weights by garment class

Loads are weighed on the plant scale before loading, not estimated. Overloading is the commonest cause of poor cleaning, poor drying, F-08 and F-11, and on the delicate classes it is also the commonest cause of bead and sequin damage, because a full cage cannot tumble and the garments grind against each other instead.

| Class | Programme | Maximum load |
|---|---|---|
| General wear, suits, jackets, trousers | 1 | 18 kg |
| Heavy soil, workwear, overalls | 2 | 18 kg |
| Wool, knitwear | 3 | 14 kg |
| Beaded, sequinned | 4 | 9 kg |
| Leather-trimmed, suede-trimmed | 5 | 9 kg |
| Wedding gown | 6 | 1 gown |
| Silk, fine drape | 7 | 8 kg |
| Bonded, coated, laminated | 8 | 10 kg |
| Down, feather | 9 | 6 kg |
| Refresh | 10 | 12 kg |

### 8.4 Pre-cycle inspection

Every garment on PRG 4, 5, 6, 7 and 8 is inspected at the classification bench before it reaches the machine. It takes about a minute a garment and it is the difference between a claim and a clean.

- **Beads and sequins.** Run a hand over every decorated panel; loose beads are removed and bagged with the docket. Test one sequin in an unseen place with a cotton bud of solvent from the test bottle: if it clouds, softens or loses colour, the garment does not go in the machine.
- **Trims.** Check leather and suede trim for cracking, colour loss and stitching that has already let go. Note and photograph anything found; it will not improve in the machine.
- **Bonded and coated fabrics.** Flex the fabric at a seam and a hem. A bonded fabric already lifting at the edge will lift further. Check the care label for a solvent restriction.
- **Fastenings and pockets.** Remove or protect belt buckles, chain trims, exposed zip pulls and metal buttons that will strike the cage. Every pocket, every garment: a single pen is a full re-clean plus a claim.
- **Smell.** Any garment smelling of petrol, thinner, adhesive or unidentified solvent is rejected and returned to the counter. This is not a judgement call.

### 8.5 Running a cycle

Load the weighed garments loosely, distributed around the cage rather than dropped in one mass. Net-bag anything the inspection flagged. Close the door until the handle seats in both detents. Select the programme with **PRG**, confirm with **ENTER**, press **START**.

The cycle runs unattended, but the operator remains in the plant. Watch the first two minutes: the vapour reading should sit below 3 % LEL through the bath, rise to between 8 % and 18 % LEL during drying, and fall away during cool-down. A reading that climbs steadily through cool-down rather than falling means the recovery condenser is not condensing, and the cycle should be stopped with **STOP**.

At the end of the cycle the machine tumbles at the P-13 anti-crease setting until the door is opened. The door will not release until every condition at 5.5 is satisfied, which on a long delicate programme can be two or three minutes after the display reads `CYCLE END`.

### 8.6 Unloading

Unload directly to a trolley or straight to the finishing rail. Do not leave a finished load in the cage past the anti-crease period; creases set and the garments pick up cage odour.

Check the cage after every delicate load for beads, sequins and detached trim, and check the button trap after every PRG 4, 5 and 6 cycle. Anything recovered goes into the docket envelope, not into the bin. A bead returned with the garment is an apology; a bead found by the customer is a claim.

Look at the garment before it leaves the machine. Damp cuffs and collars, a chalky bloom on a dark cloth, a softened print or a lifted bond are all easier to deal with at the machine than at the counter.

### 8.7 End of day

1. Run the last still batch if the day's throughput calls for it (9.5), or set it to run under P-09 with the plant occupied.
2. Empty the button trap and clean the lint trap.
3. Wipe the door gasket and the door seat.
4. Read and record Tank 1 and Tank 2 levels, filter differential, cycles run, kilograms processed and solvent added on the weekly log (Appendix B).
5. Confirm no fault is active and no warning is standing.
6. Power down at the isolator. Leave the plant room extraction running for at least 30 minutes.
7. Confirm the zone is clear, the bund is dry and the contaminated-rag bin is closed.

**DANGER.** Never leave the machine running a cycle, or the still running a batch, when the plant is unoccupied. The still in particular must never run overnight, and P-24 must not be set so that a still batch can begin after the last operator has left.

### 8.8 Shift handover

Where two operators work the machine in a day, the outgoing operator hands over in writing on the weekly log: cycles run, kilograms processed, any fault raised and how it was cleared, any warning standing, tank levels, filter differential, whether the button trap and lint trap have been done, and anything unusual seen or heard. A fault that was cleared and not written down will be raised again by the next operator as a new fault, and the pattern that would have identified the cause is lost.

---

## 9. Solvent Management

### 9.1 Charging

Solvent is delivered in 200 L drums to the bunded solvent store. Charge only through the bottom-fill connection on the left-hand lower panel, using the dedicated transfer pump and hose. Before the drum bung is opened, clamp the bonding lead to the drum rim and confirm the machine is at rest with no cycle running. Charge in 50 L steps, reading the tank level between steps. Close the bung and remove the clamp last.

First fill is 420 L. Normal operating inventory is 380 – 400 L. Top up to bring Tank 1 and Tank 2 each to 190 L; do not overfill, because a tank above its high set point will not accept a still discharge and will raise F-15.

Every delivery is recorded in Appendix C with the date, supplier, product, number of drums, litres, batch number and the flash point stated on the certificate of analysis. A delivery without a certificate of analysis is not charged to the machine until the certificate arrives.

### 9.2 Approved solvents

Only an isoparaffinic hydrocarbon dry cleaning solvent with a closed-cup flash point of not less than 62 °C as supplied, a boiling range wholly above 180 °C, an aromatic content below 0.1 %, and a KB value between 25 and 30, may be charged. Solvex HC-560 is the reference product. Any substitution must be approved in writing by Realstar service against a current certificate of analysis, and the substitution must be recorded in Appendix C. Perchloroethylene, trichloroethylene, white spirit, turpentine, mineral turps, kerosene and shellite must never be introduced to this machine.

### 9.3 Mileage

Mileage is the number of kilograms of garments cleaned per litre of solvent consumed, and it is the single best indicator that the machine is sealed and the still is working. Read kilograms from counter 6.2 and solvent added from counter 6.4, and calculate weekly on the log at Appendix B.

| Mileage | Interpretation |
|---|---|
| Above 70 kg/L | Good |
| 55 – 70 kg/L | Normal |
| 40 – 55 kg/L | Investigate: check door gasket, button trap seal, water separator carryover, still residue wetness |
| Below 40 kg/L | Fault. Solvent is being lost. Call service |

A falling mileage almost always means solvent leaving with the separated water, solvent leaving wet in the still residue, or vapour leaving through a gasket. It very rarely means the garments are taking it away. Mileage is calculated weekly, plotted, and read as a trend rather than as a single week's figure: one heavy week of feather work will drop it without anything being wrong.

### 9.4 Filter changes

Change the three cartridges when the differential reaches 220 kPa, at 1,600 kg of garments, or at three months, whichever comes first. The machine is stopped, drained to Tank 2, and the housing is left to drain for 20 minutes before the lid is opened. Wear goggles and gauntlets. Lift the used cartridges directly into the drum-lined PIW bin; do not lay them on the floor. Replace the housing lid O-ring, part RS-HM4-4030, at every second change. Reset the kilogram counter at menu 4.2 and record the change on the weekly log.

Used cartridges hold two to three litres of solvent each and are prescribed industrial waste. They go to Sovereign Environmental Services under the plant's waste agreement, never to general waste and never to the skip in the laneway. Drain them in the housing, not on the floor, and transfer them to the lined PIW drum immediately.

A fresh set of cartridges should read 25 – 45 kPa differential at operating flow. A fresh set reading above 90 kPa means either the wrong part has been fitted or the housing lid O-ring is displaced and solvent is bypassing the medium.

### 9.5 Vacuum still operation

Run one batch for every 400 – 500 kg of garments cleaned, and always after any load of heavy soil, workwear or feather. Four batches a day is the maximum set at P-10.

Charge 80 L from Tank 2 through menu 2.1. The vacuum pump starts, and the jacket steam valve opens only when the still reaches 8 kPa absolute or better. Boiling begins at 95 – 112 °C. Distillate runs through the condenser and the water separator into Tank 1. Watch the sight glass at the separator for the first five minutes: the interface should be clean and the water leg clear. A cloudy or milky distillate means the separator is flooded or the condenser is under-cooled.

A full batch takes 78 minutes including charge and drain. The still must not be left running when the plant is unoccupied and must not be started within an hour of close of business.

Distillation is the only process in the plant that returns solvent to the machine. A plant that stops distilling to save an hour does not save an hour: it buys solvent instead, loses cleaning quality within a week, and puts dirty solvent through the filters until they blind.

### 9.6 Residue removal

Residue is drawn while the still is still warm but below 40 °C at the body, through the residue valve into a lidded steel residue drum standing inside the bund. Expect 1.5 to 3.5 L per full batch. Residue that is thin and runs freely is normal. Residue that is thick, tarry or will not pour means the still has been run too long between draws, or the vacuum has been poor.

**DANGER.** Never open the still door or the residue valve while the still is hot or under vacuum. Break the vacuum through the vent valve, allow the body to fall below 40 °C, and confirm the reading on the still temperature display before touching either.

Still residue is prescribed industrial waste. It is stored in the bunded store in labelled, lidded steel drums and removed by the waste contractor against a waste transport certificate, which is filed with the plant records. Residue drums are labelled with the machine, the product, the date the drum was opened, and the words "hydrocarbon still residue — flammable".

### 9.7 Solvent quality and flash point verification

Draw a 250 mL sample from the Tank 1 sample cock monthly, into a clean labelled glass bottle, and assess it against the four checks below. Send a sample for laboratory flash point determination to AS 2106.2 every six months, and additionally after any incident, any change of supplier, and any period in which the still has been out of service for more than a week.

| Check | Method | Pass |
|---|---|---|
| Appearance | Against white card | Clear, colourless to very pale straw |
| Odour | Sniff at arm's length | Faint, characteristic; no sharp or sweet note |
| Water content | Visible free water in the sample bottle after 30 minutes | None |
| Non-volatile residue | Evaporate 100 mL on a watch glass | Less than 0.5 mL |
| Flash point | Laboratory, AS 2106.2, closed cup | Not less than 60 °C |

**A flash point below 60 °C means the charge is contaminated.** Take the machine out of service, do not run the still, and call service. The usual cause is a low-flash contaminant carried in on a garment. The charge must be removed and disposed of as prescribed industrial waste and the machine flushed before it returns to service.

### 9.8 Record keeping

The following are kept with the machine for not less than five years: delivery dockets and safety data sheets for every solvent delivery; the certificate of analysis for each batch; monthly quality checks and six-monthly flash point certificates (Appendix C); weekly logs (Appendix B); filter and still records; waste transport certificates; vapour monitor calibration certificates; annual safety inspection reports; and the hazardous area verification dossier with its inspection history.

These are the records an inspector will ask for and the records an insurer will ask for after a loss. They are kept at the site, not in a technician's van and not only in a supplier's system.

### 9.9 Diagnosing solvent loss

Where mileage has fallen below 55 kg/L, work through the following in order, because they are listed cheapest first.

1. **Separated water.** Collect one cycle's separated water in a graduated glass vessel and let it stand for an hour. Any solvent layer at all on top means the separator is flooded, its baffles are fouled, or the water leg is drawing too fast. Two hundred millilitres of solvent lost per cycle is 40 litres a month.
2. **Still residue.** Weigh a residue draw and compare it with the volume. Residue that is thin and smells strongly of solvent is wet, meaning the still is being drawn before the batch has finished. Extend the batch or lower the draw temperature.
3. **Door gasket.** Run a cycle and pass a hand slowly around the closed door during drying. A draught or a solvent smell at the gasket line means the gasket is flat or cut, or the door is not seating in both detents. Replace part RS-HM4-0118.
4. **Button trap and lint trap seals.** Both are opened many times a day and both leak long before they fail visibly. Look for a witness mark of solvent staining below each door.
5. **Filter housing lid.** Check the O-ring, part RS-HM4-4030, and the clamp torque.
6. **Cage-to-tank valves and pump gland.** A weeping gland shows as staining in the bund. Technician item.
7. **Recovery circuit.** If the vapour reading during drying is consistently above 20 % LEL and cool-down is slow, the recovery condenser is not condensing and solvent is leaving on the garments as residual odour. Technician item, usually water-side fouling.

---

## 10. Maintenance Schedule

Times are for a competent person with the tools listed and do not include waiting for the machine to cool or drain. Every task is signed off on the weekly log or, for quarterly and annual work, on the service report.

### 10.1 Daily — operator

| Task | Tool | Time |
|---|---|---|
| Witness vapour monitor self-test and initial the log | — | 2 min |
| Empty button trap (every cycle on PRG 4, 5, 6) | Non-sparking hook | 3 min |
| Clean lint trap | Brush | 4 min |
| Wipe door gasket and seat | Damp cotton cloth | 2 min |
| Read and record tank levels, filter differential, cycles, kilograms | — | 3 min |
| Check bund clear and dry, zone clear, spill kit and extinguisher in place | — | 3 min |
| Check steam, air and cooling water at the gauges | — | 2 min |

### 10.2 Weekly — operator

| Task | Tool | Time |
|---|---|---|
| Clean button trap basket and reseat gasket | Non-sparking tools | 10 min |
| Wash lint trap panel in clean solvent and refit | Brush, tray | 15 min |
| Check water separator sight glass and drain the water leg | — | 10 min |
| Confirm tank transfer valve wire-locked closed | — | 2 min |
| Check door gasket for flats, cuts and hardening | — | 5 min |
| Calculate and record mileage | — | 5 min |
| Blow down the compressed air moisture trap | — | 3 min |

### 10.3 Monthly — operator or technician

| Task | Tool | Time |
|---|---|---|
| Draw and assess solvent sample (9.7) | Sample bottle, watch glass | 20 min |
| Test continuity of the fill-point bonding clamp lead | Low-resistance ohmmeter | 10 min |
| Inspect and clean the still condenser inlet strainer | Spanners, tray | 30 min |
| Check drying duct joints and clamps for leaks | — | 15 min |
| Inspect hoses and gland seals for weeping | — | 15 min |
| Function-test the emergency stop | — | 5 min |
| Export logs to USB and file | USB drive | 10 min |

### 10.4 Quarterly — technician

| Task | Tool | Time |
|---|---|---|
| Change filter cartridges if not already changed on differential or kilograms | Spanners, PIW bin | 45 min |
| Inspect and reseat all tank hatch gaskets | Spanners | 40 min |
| Check cage drive belt tension and alignment | Tension gauge | 30 min |
| Clean recovery condenser fins and check chilled water differential | Fin comb, thermometer | 60 min |
| Descale still condenser water side if required | Chemical clean kit | 90 min |
| Verify steam reducing valve setting and lift the safety valve | Test lever, gauge | 30 min |
| Check bund and interceptor, remove sludge | Absorbent, PIW bin | 45 min |

### 10.5 Annual — technician

| Task | Tool | Time |
|---|---|---|
| Full electrical inspection to AS/NZS 60079.17, all zones, dossier updated | Ex inspection kit | 4 h |
| Bond continuity measured at every point, results recorded | Low-resistance ohmmeter | 90 min |
| Vapour monitor span calibration, both channels, certificate issued | 50 % LEL span gas | 90 min |
| Door interlock proved on both channels, individually and together | — | 45 min |
| Thermostats and thermal cut-outs proved at set point | Calibrated bath | 2 h |
| Extinguishing system inspected, cylinder weighed, bulb checked | Scales | 60 min |
| Cage bearing condition, drive, inverter and motor insulation tested | Insulation tester | 2 h |
| Still internal inspection and residue valve seat renewal | Spanners, seat kit | 3 h |
| Replace carbon polishing charge | Drum, PIW bin | 60 min |
| Annual safety inspection report issued and filed | — | 60 min |

### 10.6 Safety-critical items

The following are safety-critical. They may be performed only by a technician, they may not be deferred for production reasons, and a machine that is overdue on any of them is out of service. "Out of service" means isolated, tagged and not run — not run carefully, not run for one more day, and not run because a wedding is on Saturday.

| Item | Interval | Consequence of failure |
|---|---|---|
| Vapour monitor span calibration | 12 months | F-36 lockout at expiry; the machine loses its primary fire safeguard |
| Bond continuity verification | 12 months | Static ignition risk; F-22 |
| Door interlock two-channel proof | 12 months | Cage access while turning or hot; F-28 |
| Thermostat and thermal cut-out proof | 12 months | Drying above flash point with no independent limit; F-09 |
| Still vacuum interlock proof | 12 months | Hot jacket with no vacuum; F-16, F-17 |
| Extinguishing system inspection | 12 months | No internal fire suppression |
| Hazardous area inspection to AS/NZS 60079.17 | 12 months | Uncertified equipment in a zone |
| Laboratory flash point determination | 6 months | Undetected contamination of the charge |

### 10.7 Tools and materials to keep at the machine

| Item | Purpose |
|---|---|
| Non-sparking hook and scraper | Button trap and lint trap |
| Soft brass brush | Lint trap mesh |
| Low-resistance ohmmeter, 0 – 20 ohm | Bond continuity and clamp lead |
| Portable gas detector, 0 – 100 % LEL, calibrated | Spill clearance checks |
| Graduated glass vessel, 1 L | Separated water and residue checks |
| Sample bottles, glass, 250 mL, labelled | Solvent quality checks |
| Watch glass and balance | Non-volatile residue check |
| Platform scale, 0 – 50 kg | Load weighing |
| Spill kit: hydrocarbon pads, granulate, lidded metal bin | Spill response |
| Torque wrench, 10 – 60 Nm | Filter housing and hatch fasteners |
| Thermometer, 0 – 100 °C | Cooling water inlet and outlet |

---

## 11. Fault Codes

Every fault is displayed as a code and a message, is written to the fault log with a timestamp and the operator identifier, and remains in the log permanently. The log cannot be cleared.

**Codes marked LOCKOUT are safety lockouts.** They cannot be cleared with the RESET key. They require a technician, the service code and menu 9.3, and the technician must record the cause found. An operator who is asked to "just reset it" refuses and calls service. A lockout that is reset without a cause being found will recur, and the second occurrence is usually worse than the first.

"Operator check" is what the operator may reasonably do before calling. "Tech" means a technician is required to clear the fault, whatever the cause turns out to be.

| Code | Message | Likely cause | Operator check | Tech |
|---|---|---|---|---|
| F-01 | PHASE FAULT | Lost phase or reversed rotation | Check the isolator is fully closed | Yes |
| F-02 | CONTROL SUPPLY LOW | 24 V supply or fuse | None | Yes |
| F-03 | VAPOUR HIGH | Poor condensing, blocked lint trap, overload, low chilled water | Clean lint trap, check water flow, reduce load | If it repeats |
| F-04 | VAPOUR LOCKOUT | Vapour at or above 40 % LEL | None. Do not open the door. Evacuate if any smell of solvent | Yes — LOCKOUT |
| F-05 | VAPOUR MONITOR FAULT | Channel disagreement, pump, sample line, sensor life expired | None | Yes — LOCKOUT |
| F-06 | STEAM PRESSURE LOW | Boiler off, valve shut, strainer blocked, trap failed | Check boiler running and machine isolating valve open | If pressure is present at the main |
| F-07 | AIR PRESSURE LOW | Compressor off, moisture trap full, leak | Check compressor and drain the trap | If it repeats |
| F-08 | DRYING TIME EXCEEDED | Blocked lint trap, overload, low steam, poor condensing | Clean lint trap, weigh the load, check steam | If it repeats |
| F-09 | DRYING OVER-TEMPERATURE | Steam valve passing, thermostat or probe failure | None | Yes — LOCKOUT |
| F-10 | COOLING WATER FLOW LOW | Chiller off, valve shut, strainer blocked | Check chiller running and valve open | If flow is present |
| F-11 | CAGE IMBALANCE | Uneven load, single heavy garment, machine out of level | Redistribute the load and restart at the extract step | If it repeats on balanced loads |
| F-12 | DRIVE INVERTER TRIP | Overload, overtemperature, bearing drag | Allow to cool 20 minutes, restart once | If it repeats |
| F-14 | TANK LEVEL LOW-LOW | Solvent inventory low or a leak | Read both tank levels and top up | If levels fall with no top-up |
| F-15 | TANK LEVEL HIGH-HIGH | Overfilled, still discharged into a full tank | Stop charging | Yes |
| F-16 | STILL VACUUM FAULT | Seal water low, leaking gasket, blocked line, worn pump | Check seal water and the still door gasket | Yes if seal water is correct |
| F-17 | STILL OVER-TEMPERATURE | Steam valve passing, boiled dry, vacuum lost with heat on | None | Yes — LOCKOUT |
| F-18 | CONDENSER OUTLET HIGH | Fouled tubes, low water flow, high inlet temperature | Check chilled water flow and inlet temperature | If flow is correct |
| F-20 | EXTRACTION NOT PROVED | Plant room fan off, airflow switch, blocked grille | Check the fan is running and grilles are clear | If the fan runs |
| F-21 | PUMP OVERLOAD | Seized impeller, bead or button through the trap, seal failure | Check the button trap for damage | Yes |
| F-22 | EARTH BOND FAULT | Broken bond, corroded terminal, cage strap detached | None | Yes — LOCKOUT |
| F-23 | FILTER DIFFERENTIAL HIGH | Cartridges loaded, lint carryover | Change the cartridges (9.4) | No |
| F-24 | BUTTON TRAP NOT SEATED | Door not closed, gasket damaged or displaced | Reseat the door, inspect the gasket | If the fault persists with a good gasket |
| F-25 | LINT TRAP DOOR OPEN | Door not latched, switch fouled with lint | Clean and latch the door | If it persists |
| F-27 | SEPARATOR HIGH LEVEL | Water leg blocked, separator flooded, wet load | Drain the water leg | If it refills immediately |
| F-28 | DOOR INTERLOCK FAULT | Channel disagreement, damaged switch or tag, wiring | None | Yes — LOCKOUT |
| F-29 | BASE TANK NOT DRAINING | Blocked drain line, valve fault, pump fault | Check the button trap | Yes |
| F-30 | CYCLE TIME EXCEEDED | Accumulated stage overruns, usually drying | Note which stage overran and report it | If it repeats |
| F-32 | DRYING AIRFLOW LOW | Blocked lint trap, fan belt, duct restriction, fan failure | Clean the lint trap | If the trap is clean |
| F-33 | EXTINGUISHER DISCHARGED | Duct bulb burst at 79 °C, or manual actuation | None. Evacuate and follow 2.10 | Yes — LOCKOUT |
| F-34 | VACUUM PUMP SEAL WATER | Seal water supply low or shut off | Check the seal water valve is open | If supply is present |
| F-35 | PARAMETER CHECKSUM ERROR | Corrupted locked parameter block, failed controller battery | None | Yes — LOCKOUT |
| F-36 | CALIBRATION OVERDUE | Vapour monitor 12-month span calibration expired | None. The date was on the display for 30 days | Yes — LOCKOUT |

### 11.1 Warning codes

Warnings are advisory. They do not stop a cycle, they are displayed until acknowledged with ESC, and they are written to the fault log. A warning that is acknowledged three times without the underlying condition being dealt with escalates to the corresponding fault.

| Code | Message | Meaning | Action |
|---|---|---|---|
| A-01 | VAPOUR ELEVATED | Reading 16 – 24 % LEL | Clean lint trap, check chilled water, note on the log |
| A-02 | FILTER DUE | Differential above P-06 | Change cartridges at the next convenient break |
| A-03 | FILTER KG DUE | Kilogram counter above P-07 | Change cartridges |
| A-04 | TANK LOW | Tank below P-08 | Top up before the next delicate programme |
| A-05 | STILL DUE | 500 kg since last batch | Run a still batch |
| A-06 | CALIBRATION DUE | Span calibration due within 30 days | Book the service visit now |
| A-07 | BUTTON TRAP | P-16 cycles since last emptying | Empty the button trap |
| A-08 | SEPARATOR LEVEL | Water leg slow to clear | Drain the water leg |
| A-09 | STEAM LOW | Pressure 500 – 550 kPa | Check the boiler and the strainer |
| A-10 | COOLING WATER WARM | Inlet 18 – 21 °C | Check the chiller; drying will be slow |
| A-11 | LOG NEARLY FULL | Fault log above 4,500 entries | Arrange archiving at the next service |
| A-12 | CLOCK NOT SET | Controller clock lost | Reset time and date at menu 7.1 |

### 11.2 Clearing a fault

A fault marked "Operator" in the table clears as follows: remove the cause, press ESC to acknowledge the message, press RESET, and confirm the fault line has cleared from the display. If it has not cleared, the cause is still present. Do not press RESET repeatedly; every press is logged and none of them fixes anything.

A fault marked "Tech" needs an authorised technician but is not necessarily a lockout: the technician may clear it at the panel once the cause is corrected.

A code marked LOCKOUT clears only through menu 9.3 under the service code, and the controller will not accept the reset until the technician has entered a cause code and their identifier. Both are written to the fault log permanently. There is no way to clear a lockout without that record existing.

**DANGER.** Never ask a technician to reset a lockout so that production can continue while the cause is investigated later. Every one of the eight lockout codes exists because the machine has detected a condition in which it can burn, injure or both.

### 11.3 Troubleshooting the faults seen most often

**F-08, drying time exceeded.** In four cases out of five the lint trap is blocked, and the operator's answer that it "was done this morning" usually means it was done before a run of feather or towelling. Clean it, run the load again, and if it recurs weigh the load — an 18 kg programme run with 22 kg in the cage will never finish. After that, check steam pressure at the machine gauge under load, not at rest; a pressure that reads 600 kPa at rest and 380 kPa under load is a blocked strainer or a failed trap. Last, check the chilled water inlet temperature. Above 18 °C the recovery condenser cannot condense fast enough, the air returns to the cage already carrying solvent, and drying stalls. Never answer F-08 by asking for the drying temperature to be raised.

**F-23, filter differential high.** This is a consumable telling you it is finished, not a fault. Change the three cartridges (9.4), reset the kilogram counter, and record it. If a fresh set of cartridges reads above 90 kPa clean, either the cartridges are the wrong part or the housing lid O-ring is displaced and solvent is bypassing. If the differential rises steeply within a week of a change, the lint trap is passing fibre into the solvent circuit; check its mesh for a split.

**F-11, cage imbalance.** Redistribute the load and restart from the extract step. Single heavy items — a coat, a doona, one wet gown — will trip it however carefully they are loaded, which is why PRG 6 is one gown at a time and PRG 9 is capped at 6 kg. If it trips on loads that are properly distributed, check the machine is level within 3 mm and check the cage bearing for play by rocking the cage by hand with the machine isolated. Bearing play is a technician item and does not improve.

**F-03, vapour high.** Treat every occurrence seriously even though the machine has handled it. The cycle will finish on forced cool-down. Before running again, clean the lint trap, confirm chilled water flow and inlet temperature, and confirm the load was within the programme's weight limit. If F-03 appears on two consecutive cycles, stop and call service: the usual cause is a fouled recovery condenser, and the next step after F-03 is F-04.

**F-06, steam pressure low.** Check the boiler is fired and up to pressure, then that the machine's isolating valve is fully open, then the Y-strainer on the drop leg, then the trap. A trap that has failed open floods the condensate main and starves the machine; a trap that has failed shut waterlogs the heat exchanger. Both present as F-06 with a boiler that appears healthy. Do not run the machine on low steam by extending drying: cycles will not finish and F-08 and F-30 will follow.

**F-20, extraction not proved.** The plant room fan is off, its circuit has tripped, or the airflow switch has drifted. Check that the fan is running and that the low-level grilles are not blocked by a trolley or a bin — this is the commonest cause and it is why nothing is stored inside the zone. Do not attempt to run a cycle while F-20 stands. The interlock is enabled at P-39 and cannot be disabled.

**F-16, still vacuum fault.** Check the seal water supply to the ring pump first; a shut or throttled valve accounts for most occurrences and shows as F-34 as well. Then check the still door gasket and the residue valve for a leak, and the vacuum line for a blockage at the condenser. A pump that pulls only 15 – 20 kPa absolute with a sound gasket is worn and needs its impeller clearance set. The steam valve stays shut throughout, so the still is safe; it simply will not distil.

**F-24, button trap not seated.** Nearly always a gasket displaced during a hurried emptying, or a bead trapped on the sealing face. Open the door, wipe the face and the gasket, look for a bead, refit and latch. Replace the gasket, part RS-HM4-0112, if it is flattened, cut or hardened; they are consumable and on a machine running beaded work they last about six months. Running with a poor button trap seal draws air into the solvent circuit and shows up later as poor mileage.

**F-05, vapour monitor fault.** The machine is locked out and will not run. The commonest causes, in order, are a blocked sinter in the sample line, a sample pump that has lost flow, condensation in the knock-out pot because the line heater has failed, and a catalytic element at the end of its 36-month life. None of them is an operator repair. What the operator must not do is power-cycle the machine to see whether the fault goes away: an intermittent monitor fault is more dangerous than a permanent one, because a permanent one stops the machine.

**F-27, separator high level.** Drain the water leg and watch whether it refills immediately. If it does, the separator is flooded, usually because a run of wet or damp work has put more water through the machine than the leg can pass, or because the baffles are fouled with lint and size. A flooded separator sends water into Tank 1, and water in Tank 1 shows up two days later as poor cleaning, cloudy distillate and rust marks on steel trim. If F-27 appears more than twice in a week, have the separator stripped and cleaned.

**F-32, drying airflow low.** Clean the lint trap first; a trap that has taken a load of feather or towelling can block in a single cycle. If the trap is clean, the restriction is downstream: check the recovery condenser face for lint that has passed a split mesh, check the duct clamps for a collapsed flexible section, and check the fan belt. F-32 and F-08 together, with a clean trap, almost always mean a fouled condenser face.

**F-21, pump overload.** Isolate the machine and open the button trap. A bead, a coin or a shirt stud that has passed a damaged basket will jam the impeller, and on a machine that runs beaded work this is the single commonest mechanical failure. Look for a split or a distorted basket at the same time, because the object came through it. Do not attempt to free the impeller by repeatedly restarting the pump; that is how an impeller is broken and how a seal is destroyed.

**F-14, tank level low-low.** Read both tank levels before doing anything. If the total inventory is correct but one tank is empty and the other is full, the machine has finished a still batch into Tank 1 without drawing from Tank 2, or a valve has not sequenced. If the total inventory is genuinely low, the machine has lost solvent since the last reading, and the right response is to look for where it went (9.9) rather than simply topping up. A machine that is topped up without the loss being found will be topped up again next week.

**F-30, cycle time exceeded.** This is an accumulation fault: the controller has added the stage overruns and found the cycle running well past its programmed length. Note which stage overran, because that is the real fault. Drying is the usual answer and leads back to F-08. Bath overrun points at the pump or a valve. Extract overrun points at F-11 and imbalance retries.

---

## 12. Consumables and Spare Parts

| Part number | Description | Recommended stock |
|---|---|---|
| RS-HM4-4021 | Filter cartridge, carbon-core (3 required per change) | 6 |
| RS-HM4-4030 | Filter housing lid O-ring | 2 |
| RS-HM4-0112 | Button trap door gasket | 2 |
| RS-HM4-0118 | Loading door gasket | 1 |
| RS-HM4-2040 | Lint trap mesh panel | 1 |
| RS-HM4-0450 | Water separator sight glass with seals | 1 |
| RS-HM4-2110 | Carbon polishing charge, 18 kg | 1 |
| RS-HM4-1220 | Solvent pump mechanical seal kit | 1 |
| RS-HM4-1225 | Solvent pump impeller | 0 (order as required) |
| RS-HM4-6070 | Cage drive belt set | 1 |
| RS-HM4-6075 | Cage bearing set | 0 (order as required) |
| RS-HM4-3310 | Vapour sensor element, channel A, catalytic bead | 1 |
| RS-HM4-3312 | Vapour sensor element, channel B, infrared | 0 (order as required) |
| RS-HM4-3315 | Sample line sinter filter | 4 |
| RS-HM4-3320 | Span gas cylinder, 50 % LEL, with regulator | 1 |
| RS-HM4-7010 | Door interlock switch, channel A | 1 |
| RS-HM4-7012 | Coded magnetic sensor and tag, channel B | 1 |
| RS-HM4-7020 | Safety relay, dual channel | 0 (order as required) |
| RS-HM4-8001 | Drying thermostat, 66 °C | 1 |
| RS-HM4-8003 | Thermal cut-out, 72 °C, manual reset | 1 |
| RS-HM4-8005 | Still thermal cut-out, 165 °C, manual reset | 1 |
| RS-HM4-5120 | Steam control valve, DN25, with actuator | 0 (order as required) |
| RS-HM4-5501 | Still residue valve seat kit | 1 |
| RS-HM4-9040 | Extinguishing cylinder, 6 kg clean agent, charged | 0 (exchange unit) |
| RS-HM4-9042 | Frangible bulb, 79 °C | 2 |

| RS-HM4-0119 | Door hinge and handle detent kit | 0 (order as required) |
| RS-HM4-0460 | Water separator baffle set | 0 (order as required) |
| RS-HM4-1230 | Solvent pump gland packing set | 1 |
| RS-HM4-2050 | Lint trap door gasket | 2 |
| RS-HM4-2115 | Carbon polishing unit sealing gasket | 1 |
| RS-HM4-4035 | Filter housing clamp bolt set | 1 |
| RS-HM4-5130 | Steam strainer screen, DN25 | 1 |
| RS-HM4-5140 | Condensate trap element | 1 |
| RS-HM4-5510 | Still door gasket | 1 |
| RS-HM4-5520 | Vacuum pump seal water strainer | 2 |
| RS-HM4-6080 | Cage drive motor, 4.0 kW, Ex e | 0 (order as required) |
| RS-HM4-6090 | Inverter, 4.0 kW | 0 (order as required) |
| RS-HM4-7030 | Extraction airflow switch | 1 |
| RS-HM4-7040 | Tank level probe, intrinsically safe | 0 (order as required) |
| RS-HM4-8010 | Cage outlet temperature probe, Pt100 | 1 |
| RS-HM4-8012 | Drying inlet temperature probe, Pt100 | 1 |
| RS-HM4-8020 | Filter differential pressure transmitter | 0 (order as required) |
| RS-HM4-9050 | Zone floor marking paint kit, yellow and black | 1 |

Safety-related parts — RS-HM4-3310, 3312, 7010, 7012, 7020, 8001, 8003, 8005, 9040 and 9042 — must be genuine Realstar parts. A functional equivalent is not acceptable, because the certification of the assembly depends on the certification of the component. Fitting a substitute voids the warranty and invalidates the hazardous area verification dossier.

### 12.1 Expected consumption

For a plant running about 1,000 garments a week at an average 0.4 kg a garment, roughly 400 kg a week or 20,000 kg a year:

| Item | Expected annual usage |
|---|---|
| Filter cartridges RS-HM4-4021 | 36 – 39 (12 – 13 changes of 3) |
| Filter housing lid O-ring RS-HM4-4030 | 6 |
| Button trap gasket RS-HM4-0112 | 2 |
| Loading door gasket RS-HM4-0118 | 1 every 2 – 3 years |
| Lint trap mesh panel RS-HM4-2040 | 1 every 2 years |
| Sample line sinter RS-HM4-3315 | 4 |
| Carbon polishing charge RS-HM4-2110 | 1 |
| Solvent, top-up | 280 – 360 L |
| Still residue produced | 190 – 320 L |
| Span gas cylinder RS-HM4-3320 | 1 every 2 years |

These figures are for planning stock and waste collections. A plant consistently outside them should look at 9.9 before it looks at the figures.

---

## 13. Warranty and Service

### 13.1 Terms

Realstar warrants the HM-450 against defects in materials and workmanship for 24 months from the date of commissioning recorded in Appendix A, or 30 months from despatch from the factory, whichever expires first. Within that period Realstar or its authorised agent will repair or replace the defective part, and will bear the labour of an authorised technician during ordinary business hours. Wear parts and consumables listed in section 12 are excluded from the first day.

The warranty on this machine, serial RHM45-23-1182, runs from the commissioning date entered in Appendix A.

### 13.2 Exclusions

The warranty does not cover: consumables and wear parts, including cartridges, gaskets, seals, belts, bulbs, sinters and sensor elements; damage caused by supply services outside the specification in section 3, including over-pressure steam, contaminated compressed air, cooling water above 18 °C and supply voltage outside ± 6 %; damage caused by solvent outside 9.2; damage caused by loading a prohibited article; corrosion arising from water carryover or a flooded separator; damage caused by failure to perform the maintenance in section 10; damage arising from installation not in accordance with section 4; and garments, whether damaged by the machine or by the operator's choice of programme.

### 13.3 Mandatory annual safety inspection

An annual safety inspection by an authorised technician, covering every item at 10.6, is a condition of the warranty and remains a condition of continued safe operation after the warranty expires. The inspection produces a written report which is filed with the machine records and which the operator's insurer and the regulator are both entitled to ask for. A machine overdue on this inspection is out of service.

### 13.4 What voids the warranty

The warranty is void immediately and in full where any of the following has occurred: the vapour concentration monitor has been bypassed, disconnected or disabled; the door interlock has been defeated by any means; a locked parameter has been altered above its factory value; a safety lockout has been reset without the service code, or by a person who is not an authorised technician; a non-genuine safety-related part has been fitted; a solvent outside 9.2 has been charged; the annual safety inspection is more than 60 days overdue; or the machine has been operated with the extraction interlock or a thermal cut-out bridged. The event log records each of these, is not erasable, and is read at every service visit.

### 13.5 Service contact

Service is arranged through the authorised Realstar agent named on the commissioning record. Quote the model, the serial number RHM45-23-1182, the build number 1182, the fault code, the message text, the stage the machine was in, and the vapour reading at the time of the fault. Have the last two weeks of the weekly log to hand, and if the fault is intermittent, export the logs to USB before the technician arrives.

Before calling, confirm that the plant room extraction is running, that steam, air and cooling water are all present at the machine, and that the lint trap and button trap are clean. A high proportion of service calls on this machine are resolved by one of those four things.

---

## 14. Appendices

### Appendix A — Commissioning record

To be completed by the commissioning technician and countersigned by the site's responsible person. One copy stays with the machine; one is returned to Realstar.

```
Machine ......................... Realstar HM-450
Serial .......................... RHM45-23-1182     Build ......... 1182
Site ............................ ..............................................
Date of delivery ................ ____/____/________
Date of commissioning ........... ____/____/________
Supply voltage measured ......... ______ V   Rotation ....... correct / reversed
Earth loop impedance ............ ______ Ω
Highest bond resistance ......... ______ Ω   (maximum permitted 1.0 Ω)
Insulation resistance ........... ______ MΩ  (minimum 1 MΩ at 500 V DC)
Floor surface resistance ........ ______ Ω
Air changes per hour measured ... ______     Low-level face velocity ... ______ m/s
Steam pressure at machine ....... ______ kPa Air pressure ...... ______ kPa
Cooling water flow .............. ______ L/min  Inlet temperature ... ______ °C
Bund capacity confirmed ......... ______ L
Solvent charged ................. ______ L   Product ................................
Certificate of analysis flash point ... ______ °C
Vapour monitor calibration date . ____/____/________  Next due ... ____/____/________
F-04 lockout proved with span gas ....... yes / no
Door interlock proved, both channels .... yes / no
Thermal cut-outs proved, 72 °C / 165 °C . yes / no
Extinguishing system checked, tare ...... ______ kg
Test cycles run ......................... PRG 1 / PRG 4 / PRG 8
Hazardous area dossier prepared ......... yes / no
Operators trained (names and signatures) ...............................................
Commissioning technician ..................... Signature ............ Date ..........
Site responsible person ...................... Signature ............ Date ..........
```

### Appendix B — Weekly log

One line per day, one block per week, retained five years.

```
Week commencing ____/____/________     Machine RHM45-23-1182

Day  Cycles  Kg     Tank1 L  Tank2 L  Filter kPa  Solvent added L  Still batches  Faults  Initials
Mon  ______  _____  _______  _______  __________  _______________  _____________  ______  ________
Tue  ______  _____  _______  _______  __________  _______________  _____________  ______  ________
Wed  ______  _____  _______  _______  __________  _______________  _____________  ______  ________
Thu  ______  _____  _______  _______  __________  _______________  _____________  ______  ________
Fri  ______  _____  _______  _______  __________  _______________  _____________  ______  ________
Sat  ______  _____  _______  _______  __________  _______________  _____________  ______  ________

Weekly totals: cycles ______  kg ______  solvent added ______ L
Mileage this week = kg ÷ solvent added = ______ kg/L   (normal 55 – 70)
Vapour self-test witnessed every day ....... yes / no
Button trap and lint trap done daily ....... yes / no
Weekly tasks (10.2) completed .............. yes / no   By ................
Supervisor signature .............................. Date ____/____/________
```

### Appendix C — Solvent and flash point log

```
Machine RHM45-23-1182

DELIVERIES
Date        Supplier          Product        Drums  Litres  Batch/CoA no.  CoA flash pt  Docket filed
__/__/____  ................  .............  _____  ______  .............  ______ °C     yes / no

MONTHLY QUALITY CHECK (Tank 1 sample)
Date        Appearance  Odour  Free water  Residue mL  Result       Checked by
__/__/____  ..........  .....  ..........  __________  pass / fail  ..............

SIX-MONTHLY LABORATORY FLASH POINT (AS 2106.2, closed cup)
Date        Laboratory        Report no.     Result        Pass (≥ 60 °C)  Action
__/__/____  ................  ............  ______ °C     yes / no        ..............

STILL RESIDUE REMOVED
Date        Drums  Litres  Waste transport certificate no.  Contractor
__/__/____  _____  ______  ..............................   ..............
```

### Appendix D — Hazardous area drawing, described

The drawing held with the machine records is a plan of the plant room at 1:50 with a section at 1:20. It cannot be reproduced in this manual, so it is described here in words, and the description is what the plant checks the drawing against at each annual inspection.

The machine occupies a rectangle 1,850 mm across the plan by 1,420 mm deep, drawn against the rear wall with its front face toward the centre of the room. The bund is drawn as a second rectangle around it, offset 300 mm on all four sides, kerbed 100 mm, with the interceptor shown at its lowest corner on the right-hand rear. The whole interior of the bund is hatched solid and labelled Zone 1.

Circles of 1.0 m radius are drawn centred on each of six points, all labelled Zone 2: the loading door aperture on the front face; the button trap door on the lower left of the front face; the lint trap door on the right-hand upper panel; the still door at the rear; the tank hatches, shown as a single circle covering both; and the solvent fill point on the lower left panel. Where the circles overlap they are shown as one continuous envelope.

Around the machine footprint a further boundary is drawn 1,500 mm out on all four sides, hatched in a lighter tone, labelled "Zone 2, floor level, 0 to 500 mm above FFL". On the section drawing this region is shown as a band 500 mm deep lying on the floor, with an arrow following the 1:100 fall of the floor toward the interceptor, and a note that the band follows the fall and is not cut off by the kerb.

The solvent store is drawn separately against the laneway wall, 2,400 mm by 1,600 mm, with its own bund kerbed 150 mm and labelled 220 L capacity, its interior hatched Zone 1, and a Zone 2 envelope of 1.0 m radius around the drum bung positions and 1,500 mm at floor level around the store footprint.

Marked outside all zones and dimensioned from the nearest zone boundary are: the main isolator at 1,500 mm above FFL on the boundary line; the plant room switchboard, 3.2 m clear; the spill kit and the 9 kg dry chemical powder extinguisher at the boundary; the two low-level extraction grilles, each with its centre 180 mm above FFL and their duct routes to the roof discharge; the high-level make-up air louvre with its free area noted as 0.35 m²; and the plant room door and the egress route to the Bath Lane laneway.

The equipment schedule is printed on the same sheet: every electrical item in every zone, with its location, its zone, its protection type, its gas group, its temperature class and its certificate number, and a column for the date of the last inspection to AS/NZS 60079.17. An item that is not on the schedule is not permitted in the zone, whoever installed it and however long it has been there.

### Appendix E — Fault and incident record

One line per fault. Kept with the weekly logs. A fault that is not written down cannot be diagnosed as a pattern.

```
Machine RHM45-23-1182

Date        Time   Code   Message                 Stage        Vapour %LEL  Load kg  Programme
__/__/____  __:__  F-___  ....................... ...........  ___________  _______  _________
Cause found ..........................................................................
Action taken .........................................................................
Cleared by (name) .................  Operator / Technician   Service code used  yes / no
Lockout?  yes / no    If yes, technician name .......................................
Returned to service  __/__/____  __:__   Signed .................................

Date        Time   Code   Message                 Stage        Vapour %LEL  Load kg  Programme
__/__/____  __:__  F-___  ....................... ...........  ___________  _______  _________
Cause found ..........................................................................
Action taken .........................................................................
Cleared by (name) .................  Operator / Technician   Service code used  yes / no
Lockout?  yes / no    If yes, technician name .......................................
Returned to service  __/__/____  __:__   Signed .................................
```

### Appendix F — Operator training record

No person operates this machine until this record is completed and signed for them. Refresher training is due every 24 months, and immediately after any incident, any change of solvent, and any change to a locked parameter.

```
Machine RHM45-23-1182            Operator ........................................

Topic                                                          Covered  Assessed  Date
Section 2 in full — flammable solvent, flash point, LEL         [  ]     [  ]      __/__/____
Hazardous zone boundary, what may not enter it                  [  ]     [  ]      __/__/____
Ignition sources and static control, bonding at the drum        [  ]     [  ]      __/__/____
Vapour monitor: what it does, self-test, what a failure means   [  ]     [  ]      __/__/____
Why drying is temperature-limited; why more heat is never       [  ]     [  ]      __/__/____
   the answer to a load that will not dry
PPE for each task                                               [  ]     [  ]      __/__/____
Spill response, small and large                                 [  ]     [  ]      __/__/____
Fire response, extinguisher use, why the door stays shut        [  ]     [  ]      __/__/____
Emergency stop locations and what they do and do not do         [  ]     [  ]      __/__/____
Programmes 1 – 10 and the load limits at 8.3                    [  ]     [  ]      __/__/____
Pre-cycle inspection of beads, sequins, trims and bonds         [  ]     [  ]      __/__/____
Start of day, running a cycle, unloading, end of day            [  ]     [  ]      __/__/____
Button trap, lint trap, separator water leg                     [  ]     [  ]      __/__/____
Reading the display; the eight lockout codes and the rule       [  ]     [  ]      __/__/____
   that an operator never resets one
Logs and records the operator must complete                     [  ]     [  ]      __/__/____

Trainer .............................. Signature .............. Date __/__/____
Operator declaration: I have been trained on the above, I understand that the
solvent in this machine is flammable, and I understand that I must not reset a
safety lockout.
Operator ............................. Signature .............. Date __/__/____
Refresher due __/__/____
```

### Appendix G — Start of day check sheet

One column per day. Pin at the machine and file weekly with Appendix B.

```
Week commencing __/__/____                     Machine RHM45-23-1182

                                                Mon  Tue  Wed  Thu  Fri  Sat
Plant room extraction running, grilles clear    ___  ___  ___  ___  ___  ___
Zone clear of stored goods and trolleys         ___  ___  ___  ___  ___  ___
Bund clear and dry                              ___  ___  ___  ___  ___  ___
Spill kit and extinguisher present, unobstructed___  ___  ___  ___  ___  ___
Steam pressure 550 – 620 kPa                    ___  ___  ___  ___  ___  ___
Air pressure 550 – 700 kPa                      ___  ___  ___  ___  ___  ___
Cooling water flowing, inlet below 18 °C        ___  ___  ___  ___  ___  ___
Vapour self-test watched to SENSOR OK           ___  ___  ___  ___  ___  ___
   Channel A reading (% LEL)                    ___  ___  ___  ___  ___  ___
   Channel B reading (% LEL)                    ___  ___  ___  ___  ___  ___
   Calibration due date not passed              ___  ___  ___  ___  ___  ___
Tank 1 level (L)                                ___  ___  ___  ___  ___  ___
Tank 2 level (L)                                ___  ___  ___  ___  ___  ___
Filter differential (kPa)                       ___  ___  ___  ___  ___  ___
Button trap emptied                             ___  ___  ___  ___  ___  ___
Lint trap clean                                 ___  ___  ___  ___  ___  ___
No fault active, no warning standing            ___  ___  ___  ___  ___  ___
Operator initials                               ___  ___  ___  ___  ___  ___
```

Any line that cannot be initialled is a reason not to start the machine. Report it to the supervisor and record what was done in Appendix E.

---

*End of manual. Realstar HM-450, Rev 2, March 2023. Issued for serial RHM45-23-1182.*
