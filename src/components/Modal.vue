<template>
  <Fragment>
    <div class="overlay"></div>
    <div class="modal modal_small">
      <slot name="logo">
        <div class="modal-company">
          <img src="../assets/img/logo_modal.svg" alt="">
          <span>MoneyHunter</span>
        </div>
      </slot>
      <div class="modal-title">{{title}}</div>
      <slot/>
    </div>
  </Fragment>
</template>

<script>
  import {Fragment} from 'vue-fragment';

  export default {
    name: "Modal",
    components: {Fragment},
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/variables.scss";

  .overlay {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, .5);
  }

  .modal {
    z-index: 101;
    min-width: 39.28rem;
    max-height: calc(100% - (5.57rem * 2));
    border-radius: 30px;
    background: white;
    padding: 4rem 7.14rem 4.35rem;
    position: fixed;
    top: 5.57rem;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: auto;

    &.modal_small {
      max-width: 39.28rem;
    }

    &.modal_big {
      max-width: 42.85rem;
    }
  }

  .close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.71rem;
    height: 1.71rem;
    background: url("../assets/img/ikons/close.svg") no-repeat;
  }

  .modal-company {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.14rem;

    span {
      font-size: 1.78rem;
      font-weight: bold;
      letter-spacing: .512px;
      color: $titleColor;
      margin-left: 1rem;
    }
  }

  .modal-title {
    font-size: 1.71rem;
    font-weight: bold;
    letter-spacing: .3px;
    color: black;
    text-align: center;
  }

  .modal-form {
    margin-top: 1.71rem;
    border-top: 1px solid $drayDevider;
    padding-top: 1.42rem;
  }

  .modal-form__input-item {

    &:not(:first-child) {
      margin-top: .85rem;
    }
  }

  .modal-form__submit-item {
    margin-top: 1.57rem;
  }

  .modal-form__links {
    display: flex;
    justify-content: space-between;
    margin-top: 1.35rem;

    &.modal-form__links_align-center {
      justify-content: center;
    }

    a {
      color: $blue;
      text-decoration: underline;
      letter-spacing: .2px;

      &:last-child {
        text-align: right;
      }
    }
  }

  .modal-form__promocod-item {
    position: relative;
    margin-top: 1.5rem;
  }

  .modal-form__promocod-link {
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    letter-spacing: .2px;
    color: $titleColor;
    text-decoration: underline;
  }

  .modal-form__promocod-done {
    cursor: pointer;
    position: absolute;
    width: 2.85rem;
    height: 2.85rem;
    border-radius: 0px 4px 4px 0px;
    background: url("../assets/img/ikons/promocod_arrow.svg") no-repeat center, $yellow;
    right: 0px;
    bottom: 0px;
  }

  .modal-form__success-reset-password {
    margin-top: 2.14rem;
    text-align: center;
    color: $green;
    letter-spacing: .2px;
  }

  .modal-form__save-project {
    margin-top: 1.42rem;

    label {
      text-align: center;
      margin-bottom: .92rem;
    }
  }

  .modal-form__double-submit {
    display: flex;
    justify-content: space-between;

    &.modal-form__double-submit_save-project {
      margin-top: 2.71rem;
    }

    &.modal-form__double-submit_download-project {
      margin-top: 1.78rem;
    }
  }

  .modal-form__double-submit-item {
    flex-basis: calc((100% - 3.14rem) / 2);
  }

  .modal-form__download-project {
    /*margin-top: 1.92rem;*/
  }

  .modal-form__download-project-item {

    &:not(:last-child) {
      margin-bottom: .71rem;
    }
  }

  .modal-form-steps {
    margin-top: 1.64rem;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .modal-form-steps__line {
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 1px;
    border-bottom: 1px solid $drayDevider;
    top: 1.28rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .modal-form-steps__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.modal-form-steps__item_active {

      .step-circle {
        border-color: $yellow;
        color: $yellow;
      }

      .step-name {
        color: black;
      }
    }

    &.modal-form-steps__item_success {

      .step-circle {
        background: url("../assets/img/ikons/check.svg") no-repeat center, $yellow;
        color: transparent;
        border-color: $yellow;
      }

      .step-name {
        color: rgba(183, 185, 199, .8);
      }
    }
  }

  .step-circle {
    width: 2.57rem;
    height: 2.57rem;
    border-radius: 100%;
    border: 2px solid $drayDevider;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $drayDevider;
    font-weight: bold;
  }

  .step-name {
    margin-top: .42rem;
    color: rgba(183, 185, 199, .8);
    font-weight: 500;
    font-size: 1.14rem;
    letter-spacing: .3px;
  }

  .modal-form-search {
    margin-top: 2.85rem;
  }

  .modal-form-search__not {
    text-align: center;
    color: $titleColor;
    font-size: bold;
    letter-spacing: .2px;
    font-weight: bold;

    img {
      margin: 0 auto 2.71rem;
    }
  }

  .modal-form-product {
    margin-top: 1.42rem;
  }

  .modal-form-category {
    margin-top: 1.42rem;
    padding-bottom: 1.42rem;
    border-bottom: 1px solid $drayDevider;
  }

  .modal-form__category-list {
    margin-top: 1.07rem;
    max-height: 28.28rem;
    overflow-y: auto;
  }
</style>