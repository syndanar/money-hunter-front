<template>
  <div class="tarifes block_container">
    <Tariff
      v-for="item in tariffs"
      :key="item.name"
      :price="item.price"
      :clazz="item.clazz"
      :name="item.name"
      :list="item.list"
      :is-buyable="item.isBuyable"
      :isLoaded="isLoaded"
    />
  </div>
</template>

<script>
  import Tariff from "./Tariff";
  import {GET_ALL_SUBSCRIBTIONS} from "@/store/modules/user/constants"

  export default {
    name: "TariffList",
    components: {Tariff},
    data() {
      return {
        tariffs: [
          {
            name: "FREE",
            price: 0,
            clazz: "tarif__item_fourth",
            isBuyable: false,
            list: [
              {text: "10 товаров на отслеживании", success: true},
              {text: "20 анализов по категориям", success: true},
              {text: "Скачивание отчётов", error: true},
              {text: "Автоподсорт", error: true}
            ]
          },
          {
            name: "PRO",
            price: 990,
            clazz: "tarif__item_fourth",
            isBuyable: true,
            list: [
              {text: "150 товаров на отслеживании", success: true},
              {text: "Безлимит анализов по категориям", success: true},
              {text: "Скачивание отчётов", success: true},
              {text: "Автоподсорт", success: true}
            ]
          },
        ],
        isLoaded: true,
      }
    },
  }
</script>

<style scoped lang="scss">
  .tarifes {
    margin-top: 2.5rem;
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 1300px) {
      justify-content: center;
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin-top: 1rem;
    }
    @media screen and (max-width: 420px) {
      padding: 0px 10px;
    }
  }
  
</style>