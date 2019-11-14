/*[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
#1 Three Merge calls
      [21, 1, 26, 45, 29, 28, 2, 9]          [16, 49, 39, 27, 43, 34, 46, 40]

  [21, 1, 26, 45]         [29, 28, 2, 9]

  16 Merge calls
  [21] [1] [26] [45] [29] [28] [2] [9]      [16] [49] [39] [27] [43] [34] [46] [40]

  First 2 lists to be merged
  1: [1, 21]
  2: [26, 45]

  Which 2 lists would be merged on 7th
  [21, 1, 26, 45]   [29, 28, 2, 9]
*/

//[3, 9 ,1, 14, 17, 24, 22, 20]
//assuming pivot starts at last item --> first partition occurs when i < pivot
//Neither 17 nor 17 could have been the pivot since the first three values are less
//which would result in the same arr each partition for at least the first 3 times

