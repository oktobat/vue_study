<template>
    <div class="checkBox">
      <div>애완용품샵 체크아웃</div>
      <div>
        <div>
          <div>
            <h4><strong>정보를 입력하세요</strong></h4>
          </div>
        </div>
        <div>
          <div>
            <strong>성:</strong>
            <input v-model="order.firstName">
          </div>
          <div>
            <strong>이름:</strong>
            <input v-model="order.lastName">
          </div>
        </div>
        <div>
          <div><strong>주소:</strong></div>
          <div>
            <input v-model="order.address">
          </div>
        </div>
        <div>
          <div><strong>상세주소:</strong></div>
          <div>
            <input v-model="order.detailAddr">
          </div>
        </div>
        <div>
          <div>
            <strong>시도:</strong>
            <select v-model="order.sido">
              <option disabled value="">선택</option>
              <option v-for="(sido, key) in sidos" v-bind:key="key" v-bind:value="sido">{{ key  }}</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <strong>우편번호:</strong>
            <input type="number" v-model="order.zip">
          </div>
        </div>
        <div>
          <div>
            <label><input type="checkbox" v-model="order.gift" true-value="선물포장" false-value="포장안함">선물로 보내기?</label>
          </div>
        </div>
        <div>
          <div>
            <label><input type="radio" v-model="order.method" value="자택주소">자택</label>
            <label><input type="radio" v-model="order.method" value="직장주소">직장</label>
          </div>
        </div>
        <div>
          <div>
            <button type="submit" @click="submitForm" class="btn btn-primary submit">주문하기</button>
          </div>
        </div>
        <div>
          <pre>

            성: {{ order.firstName }}
            이름: {{ order.lastName }}
            주소: {{ order.address }}
            상세주소: {{ order.detailAddr }}
            시도: {{ order.sido  }}
            우편번호: {{ order.zip }}
            선물: {{ order.gift }}
            배송지: {{ order.method }}
          </pre>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'CheckOut',
        data() {
            return {
                sidos:{
                    Seoul:'서울시',
                    Gyunggi:'경기도',
                    Gyungsang:'경상도',
                    Chungcheong:'충청도',
                    Jeonla:'전라도'
                },
                order:{
                    firstName:'',
                    lastName:'',
                    address:'',
                    detailAddr:'',
                    sido:'',
                    zip:'',
                    gift:'',
                    method:'',
                }
            }
        },
        methods:{
          submitForm(){
                alert('주문완료')
            }
        }
    }
</script>

<style lang="scss" scoped>
  .checkBox { height:1200px }
</style>