# Cold build (no nx cache and no tsc cache)

```bash
hyperfine -r 3 \
-p "rm -rf packages/**/dist && nx reset" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

# 25% affected projects (162)

## Updating many pkgs at the same level (154 changed projects <= 7 <= 1)

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

## Updating 1 shared pkg (1 changed project <= 150 <= 6 <= 1)

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

# 50% affected projects (325)

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 50" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

# 75% affected projects (488)

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 75" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2 shared-3" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

# 100% affected projects

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --percentage 100" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

```bash
hyperfine -r 3 -w 1 \
-p "node affect-projects.mjs --pkgs shared-1 shared-2 shared-3 shared-4" \
-n "Without project references (production files)" "nx run pkg-1:tsc-p" \
-n "Without project references (dependentTasksOutputFiles)" "nx run pkg-1:build:tsc-p" \
-n "With project references" "nx run pkg-1:build" \
-n "Running tsc -b directly" "node_modules/.bin/tsc -b packages/pkg-1/tsconfig.lib.json"
```

---

# No file changes

```bash
hyperfine -r 3 -w 1 \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     202.011 s ±  0.474 s    [User: 1319.747 s, System: 60.464 s]
  Range (min … max):   201.633 s … 202.544 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     41.904 s ±  0.124 s    [User: 105.654 s, System: 13.390 s]
  Range (min … max):   41.770 s … 42.015 s    3 runs

Summary
  With project references ran
    4.82 ± 0.02 times faster than Without project references
```

---

## Update root project

```bash
hyperfine -r 3 -w 1 \
-p "node modify.mjs --type root --amount 1" \
--cleanup "git restore ." \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     207.969 s ±  2.075 s    [User: 1279.278 s, System: 56.070 s]
  Range (min … max):   205.585 s … 209.372 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     81.322 s ±  1.314 s    [User: 118.521 s, System: 19.743 s]
  Range (min … max):   80.525 s … 82.839 s    3 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs.

Summary
  With project references ran
    2.56 ± 0.05 times faster than Without project references
```

---

## Update one middle project

```bash
hyperfine -r 3 -w 1 \
-p "node modify.mjs --type middle --amount 1" \
--cleanup "git restore ." \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     206.321 s ±  0.258 s    [User: 1279.806 s, System: 60.462 s]
  Range (min … max):   206.068 s … 206.584 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     54.037 s ±  0.536 s    [User: 107.581 s, System: 14.266 s]
  Range (min … max):   53.453 s … 54.505 s    3 runs

Summary
  With project references ran
    3.82 ± 0.04 times faster than Without project references
```

---

## Update one leaf project

```bash
hyperfine -r 3 -w 1 \
-p "node modify.mjs --type leaf --amount 1" \
--cleanup "git restore ." \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     205.394 s ±  1.507 s    [User: 1274.638 s, System: 56.653 s]
  Range (min … max):   203.877 s … 206.891 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     53.423 s ±  0.459 s    [User: 106.634 s, System: 13.761 s]
  Range (min … max):   53.114 s … 53.951 s    3 runs

Summary
  With project references ran
    3.84 ± 0.04 times faster than Without project references
```

---

## Update many middle projects

```bash
hyperfine -r 3 -w 1 \
-p "node modify.mjs --type middle" \
--cleanup "git restore ." \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     205.793 s ±  0.290 s    [User: 1277.845 s, System: 58.865 s]
  Range (min … max):   205.548 s … 206.113 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     60.230 s ±  0.147 s    [User: 135.997 s, System: 17.754 s]
  Range (min … max):   60.069 s … 60.357 s    3 runs

Summary
  With project references ran
    3.42 ± 0.01 times faster than Without project references
```

---

## Update many leaf node projects

```bash
hyperfine -r 3 -w 1 \
-p "node modify.mjs --type leaf" \
--cleanup "git restore ." \
-n "Without project references" "nx build pkg-1 --configuration=tsc-p --skip-nx-cache" \
-n "With project references" "nx build pkg-1 --skip-nx-cache"
Benchmark 1: Without project references
  Time (mean ± σ):     215.061 s ±  6.160 s    [User: 1320.858 s, System: 59.049 s]
  Range (min … max):   210.772 s … 222.119 s    3 runs

Benchmark 2: With project references
  Time (mean ± σ):     107.401 s ±  1.605 s    [User: 568.155 s, System: 27.345 s]
  Range (min … max):   106.270 s … 109.238 s    3 runs

Summary
  With project references ran
    2.00 ± 0.06 times faster than Without project references
```
