<script setup>
import {ref} from "vue";

const countValue = ref('')
const calculatorElements = ['C','*','/','-',7,8,9,'+',4,5,6,'%',1,2,3,'=','.',0]
const operator = ref(null)
const pervCalcVal = ref('')
function action(calculatorElement){
  if (!isNaN(calculatorElement) || calculatorElement ==='.'){
    countValue.value += calculatorElement + ''
  }
  if (calculatorElement === 'C'){
    countValue.value = ''
  }

  if (['*','/','-','+'].includes(calculatorElement)){
      operator.value = calculatorElement
      pervCalcVal.value = countValue.value
      countValue.value = ''
  }


  if(calculatorElement === '%'){
    countValue.value = countValue.value / 100 + ''
  }


  if (calculatorElement === '='){
    if(operator.value === '/'){
      countValue.value = pervCalcVal.value / countValue.value + ''
      return countValue.value
    }

    if(operator.value === '*'){
      countValue.value = pervCalcVal.value  * countValue.value + ''
      return countValue.value
    }

    if(operator.value === '-'){
      countValue.value = pervCalcVal.value - countValue.value + ''
      return countValue.value
    }
    if(operator.value === '+'){
      countValue.value = parseInt(pervCalcVal.value) + parseInt(countValue.value) + ''
      return countValue.value
    }

  }
}
</script>

<template>
  <div class="root">
    <div class="wrapper">
      <div class="main">
        <div class="info">
          <div class="left-side">
            <div class="input-side">
                <input class="input" disabled v-model="countValue">
            </div>
          </div>
          <div class="right-side">
            <div class="main-knock">
              <div class="main-number"
                   v-for="calculatorElement in calculatorElements"
                   :key="calculatorElement"

              >
                <button class="btn"
                        @click="action(calculatorElement)"
                        :class="{'btn-count':['C','+','-','*','/','%'].includes(calculatorElement)}"
                >
                  {{ calculatorElement }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/main"
$layout-breakpoint-small: 1020px
.input-side
  display: flex
  width: 100%
  height: 100%
  align-items: center
  justify-content: center

.input
  height: 100%
  font-size: 20px
  padding: 10px

@media (max-width: $layout-breakpoint-small)
  .input
    width: 140px
    height: 50px

.main-knock
  grid-template-columns: repeat(4,1fr)
  display: grid
  width: 100%
  height: 100%
  margin: 0 auto
  padding: 10px 10px 10px
  justify-content: space-around


.main-number
  margin: auto

.btn-count
  background: #646D7E
  display: flex
  align-items: center
  justify-content: center
  width: 75px
  height: 50px
  border: 1px solid #d2d1d2
  font-size: 20px
  cursor: pointer

.btn
  display: flex
  align-items: center
  justify-content: center
  width: 75px
  height: 50px
  border: 1px solid #d2d1d2
  font-size: 20px
  cursor: pointer

@media (max-width: $layout-breakpoint-small)
  .btn
    width: 45px
    height: 45px

  .btn-count
    background: #646D7E


.btn:active
  background: ivory
  transform: translate(0em, 0.1em)




</style>