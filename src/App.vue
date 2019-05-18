<template>
  <div class="wrapper">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/home">Личный кабинет</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/card">Платежи</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/history">История платежей</router-link>
        </li>
        <li class="nav__item">
          <a class="nav__link nav__link--color" href="">Настройки</a>
        </li>
        <li class="nav__item">
          <a class="nav__link nav__link--color" href="">Выйти</a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <!-- <Card></Card> -->
    <!-- <History></History> -->
    <section class="description">
      <p>Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.</p>
      <p>Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.</p>
      <p>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.</p>
      <p>Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.</p>
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import History from './components/History.vue';

export default {
  components: { Card, History },
  data () {
    return {
    }
  }
}
</script>

<style>

.router-link-active {
  color: #808592;
  background-color: #2a2d37;
}

</style>
