# Repo structure

The repo contains 656 projects with the following structure:

```
                             pkg-1
              /                |                  \
          pkg-1-1             ...             pkg-1-25
     /       |         \       |         /       |         \
pkg-1-1-1   ...   pkg-1-1-25  ...   pkg-1-25-1   ...   pkg-1-25-25
  |       |         |       |         |       |         |       |
  ---------         ---------         ---------         ---------
      |                 |                 |                 |
  shared-1          shared-2          shared-3          shared-4
      \                 \                /                 /
                              shared
```

- each project has 252 TS files
- there's a root `pkg-1` project
- `pkg-1` directly depends on 25 projects (`pkg-1-1` to `pkg-1-25`)
- each of the 25 projects depends on other 25 projects (`pkg-1-1-1` to `pkg-1-25-25`) for a total of 625 projects at the third level
- the projects from `pkg-1-1-1` to `pkg-1-6-25` depend on the `shared-1` project
- the projects from `pkg-1-7-1` to `pkg-1-12-25` depend on the `shared-2` project
- the projects from `pkg-1-13-1` to `pkg-1-18-25` depend on the `shared-3` project
- the projects from `pkg-1-19-1` to `pkg-1-25-25` depend on the `shared-4` project
- the projects from `shared-1` to `shared-4` depend on the `shared` project

# ~25% affected projects

## Directly updating 154 projects, affecting 8 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 25" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     97.501 s ±  1.108 s    [User: 365.442 s, System: 31.395 s]
  Range (min … max):   96.456 s … 98.662 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     80.151 s ±  0.386 s    [User: 333.561 s, System: 23.003 s]
  Range (min … max):   79.803 s … 80.566 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     80.341 s ±  0.224 s    [User: 335.099 s, System: 23.265 s]
  Range (min … max):   80.119 s … 80.567 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):     46.452 s ±  0.185 s    [User: 61.838 s, System: 4.520 s]
  Range (min … max):   46.239 s … 46.574 s    3 runs

Summary
  Running tsc -b directly ran
    1.73 ± 0.01 times faster than Without project references (dependentTasksOutputFiles)
    1.73 ± 0.01 times faster than With project references
    2.10 ± 0.03 times faster than Without project references (production files)
```

## Directly updating 1 shared project, affecting 157 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     94.624 s ±  1.659 s    [User: 332.247 s, System: 30.164 s]
  Range (min … max):   93.418 s … 96.517 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     35.418 s ±  0.149 s    [User: 4.262 s, System: 0.583 s]
  Range (min … max):   35.318 s … 35.589 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     35.728 s ±  0.780 s    [User: 4.168 s, System: 0.565 s]
  Range (min … max):   35.196 s … 36.623 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):      7.213 s ±  0.049 s    [User: 8.990 s, System: 0.973 s]
  Range (min … max):    7.182 s …  7.269 s    3 runs

Summary
  Running tsc -b directly ran
    4.91 ± 0.04 times faster than Without project references (dependentTasksOutputFiles)
    4.95 ± 0.11 times faster than With project references
   13.12 ± 0.25 times faster than Without project references (production files)
```

# ~50% affected projects

## Directly updating 311 projects, affecting 14 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 50" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     146.234 s ±  1.186 s    [User: 719.851 s, System: 58.345 s]
  Range (min … max):   145.474 s … 147.600 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     126.829 s ±  1.133 s    [User: 669.075 s, System: 46.891 s]
  Range (min … max):   125.710 s … 127.976 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     129.391 s ±  2.254 s    [User: 671.168 s, System: 48.608 s]
  Range (min … max):   126.801 s … 130.908 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):     90.932 s ±  1.814 s    [User: 117.144 s, System: 10.323 s]
  Range (min … max):   88.892 s … 92.365 s    3 runs

Summary
  Running tsc -b directly ran
    1.39 ± 0.03 times faster than Without project references (dependentTasksOutputFiles)
    1.42 ± 0.04 times faster than With project references
    1.61 ± 0.03 times faster than Without project references (production files)
```

## Directly updating 2 shared projects, affecting 313 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     138.813 s ±  1.109 s    [User: 648.350 s, System: 55.398 s]
  Range (min … max):   137.901 s … 140.047 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     37.769 s ±  2.105 s    [User: 6.484 s, System: 0.741 s]
  Range (min … max):   36.543 s … 40.199 s    3 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs.

Benchmark 3: With project references
  Time (mean ± σ):     36.947 s ±  1.077 s    [User: 6.335 s, System: 0.725 s]
  Range (min … max):   36.066 s … 38.149 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):      7.608 s ±  0.097 s    [User: 10.127 s, System: 0.994 s]
  Range (min … max):    7.541 s …  7.719 s    3 runs

Summary
  Running tsc -b directly ran
    4.86 ± 0.15 times faster than With project references
    4.96 ± 0.28 times faster than Without project references (dependentTasksOutputFiles)
   18.25 ± 0.27 times faster than Without project references (production files)
```

# ~75% affected projects

## Directly updating 468 projects, affecting 20 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 75" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     193.225 s ±  1.502 s    [User: 1069.669 s, System: 84.107 s]
  Range (min … max):   191.561 s … 194.481 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     170.686 s ±  0.048 s    [User: 1005.138 s, System: 70.433 s]
  Range (min … max):   170.639 s … 170.736 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     176.151 s ±  2.442 s    [User: 1011.841 s, System: 72.697 s]
  Range (min … max):   174.636 s … 178.968 s    3 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs.

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):     131.086 s ±  1.427 s    [User: 170.067 s, System: 13.308 s]
  Range (min … max):   129.472 s … 132.183 s    3 runs

Summary
  Running tsc -b directly ran
    1.30 ± 0.01 times faster than Without project references (dependentTasksOutputFiles)
    1.34 ± 0.02 times faster than With project references
    1.47 ± 0.02 times faster than Without project references (production files)
```

## Directly updating 3 shared projects, affecting 469 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2 shared-3" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     182.119 s ±  1.622 s    [User: 960.325 s, System: 79.985 s]
  Range (min … max):   181.065 s … 183.987 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     36.098 s ±  0.386 s    [User: 8.843 s, System: 0.897 s]
  Range (min … max):   35.660 s … 36.387 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     35.823 s ±  1.110 s    [User: 8.746 s, System: 0.898 s]
  Range (min … max):   34.788 s … 36.995 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):      7.915 s ±  0.015 s    [User: 10.964 s, System: 1.007 s]
  Range (min … max):    7.899 s …  7.929 s    3 runs

Summary
  Running tsc -b directly ran
    4.53 ± 0.14 times faster than With project references
    4.56 ± 0.05 times faster than Without project references (dependentTasksOutputFiles)
   23.01 ± 0.21 times faster than Without project references (production files)
```

# ~100% affected projects

## Directly updating 656 projects, affecting 26 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 100" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     241.280 s ±  1.198 s    [User: 1419.010 s, System: 110.995 s]
  Range (min … max):   240.495 s … 242.659 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     216.363 s ±  1.724 s    [User: 1336.486 s, System: 95.044 s]
  Range (min … max):   214.503 s … 217.907 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     221.154 s ±  0.955 s    [User: 1344.657 s, System: 97.993 s]
  Range (min … max):   220.397 s … 222.227 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):     175.871 s ±  4.453 s    [User: 236.095 s, System: 16.055 s]
  Range (min … max):   172.824 s … 180.982 s    3 runs

Summary
  Running tsc -b directly ran
    1.23 ± 0.03 times faster than Without project references (dependentTasksOutputFiles)
    1.26 ± 0.03 times faster than With project references
    1.37 ± 0.04 times faster than Without project references (production files)
```

## Directly updating 4 shared projects, affecting 651 other projects indirectly

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2 shared-3 shared-4" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
Benchmark 1: Without project references (production files)
  Time (mean ± σ):     232.443 s ±  1.128 s    [User: 1326.421 s, System: 109.500 s]
  Range (min … max):   231.685 s … 233.740 s    3 runs

Benchmark 2: Without project references (dependentTasksOutputFiles)
  Time (mean ± σ):     36.886 s ±  0.723 s    [User: 10.798 s, System: 1.009 s]
  Range (min … max):   36.421 s … 37.719 s    3 runs

Benchmark 3: With project references
  Time (mean ± σ):     38.673 s ±  2.602 s    [User: 10.525 s, System: 1.029 s]
  Range (min … max):   37.012 s … 41.671 s    3 runs

Benchmark 4: Running tsc -b directly
  Time (mean ± σ):      8.791 s ±  0.055 s    [User: 11.682 s, System: 1.395 s]
  Range (min … max):    8.746 s …  8.853 s    3 runs

Summary
  Running tsc -b directly ran
    4.20 ± 0.09 times faster than Without project references (dependentTasksOutputFiles)
    4.40 ± 0.30 times faster than With project references
   26.44 ± 0.21 times faster than Without project references (production files)
```
