//================= Bubble Sort ==================
const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// console.log(bubbleSort([123, 242, 1, 65, 33, 555]));

//================= Selection Sort ==================
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

// console.log(selectionSort([35, 12, 75, 1, 5, -3]));

//================= Insertion Sort ==================
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

// console.log(insertionSort([35, 1, 101, 22, 5, 67, 4]));

//================= Merge Sort ==================
const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

// console.log(mergeSort([32, 1645, 21, 64, 3, 123, 8, 43, 11, 663]));

//================= Quick Sort ==================
const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIndex - 1);
    //right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// console.log(quickSort([4, 8, 2, -3, 100, 632, 1, 5, 7, 6, 3]));
