// src/store/counter.ts
import { defineStore } from "pinia";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// 这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
// 第二个参数可接受两类值：Setup 函数或 Option 对象。

// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

// Option 对象
// state 是 store 的数据 (data)，
// getters 是 store 的计算属性 (computed)，
// actions 则是方法 (methods)

// Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，
// 并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。

// 传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。
export const useCounterStore = defineStore("counter", () => {
  // ref变量 → state 属性
  const count = ref(0);
  // computed计算属性 → getters
  const double = computed(() => {
    return count.value * 2;
  });
  // function函数 → actions
  function increment() {
    count.value++;
  }
  return { count, double, increment };
});
