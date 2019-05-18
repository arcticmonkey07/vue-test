<template>
  <section class="payments">
    <form class="card" @submit.prevent="onSubmit">
      <p class="payments__info-header">Информация по оплате:</p>
      <table class="payments__info">
        <tr>
          <td class="payments__item">Номер счета:</td>
          <td class="payments__item payments__item-number">
            <input 
              type="text" 
              v-model="accountNumber"
              @change="saveMessage"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            >
          </td>
        </tr>
        <tr>
          <td class="payments__item">Сумма платежа:</td>
          <td class="payments__item payments__item-sum">
            <input 
              type="text" 
              v-model="paymentSum"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            >
          </td>
        </tr>
      </table>
      <h2 class="payments__card-header">Данные банковской карты</h2>
      <div class="card-top">
        <div class="card-top__item">
          <p class="card-top__number-header">Номер карты</p>
          <input 
            type="text" 
            maxlength="4"
            class="card-top__number-input" 
            v-model="numberOne"
            :class="{ error: $v.numberOne.$error }"
            @change="$v.numberOne.$touch()"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          >
          <input 
            type="text" 
            maxlength="4"
            class="card-top__number-input" 
            v-model="numberTwo"
            :class="{ error: $v.numberTwo.$error }"
            @change="$v.numberTwo.$touch()"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          >
          <input 
            type="text" 
            maxlength="4"
            class="card-top__number-input" 
            v-model="numberThree"
            :class="{ error: $v.numberThree.$error }"
            @change="$v.numberThree.$touch()"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          >
          <input 
            type="text" 
            maxlength="4"
            class="card-top__number-input" 
            v-model="numberFour"
            :class="{ error: $v.numberFour.$error }"
            @change="$v.numberFour.$touch()"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          >
        </div>
        <p class="card-top__validity-header">Срок действия</p>
        <select class="card-top__validity-input-month" required>
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
          <option value="6">7</option>
          <option value="7">8</option>
          <option value="8">9</option>
          <option value="9">10</option>
          <option value="10">11</option>
          <option value="11">12</option>
        </select>
        <select class="card-top__validity-input-year" required>
          <option value="0">2019</option>
          <option value="1">2020</option>
          <option value="2">2021</option>
          <option value="3">2022</option>
          <option value="4">2023</option>
        </select>
        <input 
          type="text" 
          class="card-top__holder-input" 
          placeholder="Держатель карты"
          v-model="holder"
          :class="{ error: $v.holder.$error }"
          @change="$v.holder.$touch()"
          pattern="^[a-zA-Z\s]+$"
        >
      </div>
      <div class="card-inverse">
        <div class="card-inverse__cvc-wrapper">
          <p class="card-inverse__cvc-header">Код CVV2 / CVC2</p>
          <input 
            type="text" 
            maxlength="3" 
            class="card-inverse__cvc-input" 
            v-model="cvc"
            :class="{ error: $v.cvc.$error }"
            @change="$v.cvc.$touch()"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          >
        </div>
      </div>
      <button 
        class="card__button-submit" 
        type="submit"
        :disabled="submitStatus === 'PENDING'"
        >Оплатить</button>
      <p class="card__button-submit-message" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="card__button-submit-message" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="card__button-submit-message" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </section>
</template>

<script>
import { bus } from './../index.js';
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      accountNumber: '',
      paymentSum: '',
      numberOne: '',
      numberTwo: '',
      numberThree: '',
      numberFour: '',
      cvc: '',
      holder: '',
      submitStatus: null
    }
  },
  validations: {
    accountNumber: {
      required
    }, paymentSum: {
      required
    },
    numberOne: {
      required,
      minLength: minLength(4)
    }, numberTwo: {
      required,
      minLength: minLength(4)
    }, numberThree: {
      required,
      minLength: minLength(4)
    }, numberFour: {
      required,
      minLength: minLength(4)
    }, cvc: {
      required,
      minLength: minLength(3)
    }, holder: {
      required,
      minLength: minLength(3)
    }
  }, methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          accountNumber: this.accountNumber,
          paymentSum: this.paymentSum,
          numberOne: this.numberOne,
          numberTwo: this.numberTwo,
          numberThree: this.numberThree,
          numberFour: this.numberFour,
          cvc: this.cvc,
          holder: this.holder,
          date: new Date()
        }
        console.log(user);
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    saveMessage() {
      bus.$emit('message', this.accountNumber);
      this.accountNumber = '';
    }
  }
}

</script>

<style>

</style>
