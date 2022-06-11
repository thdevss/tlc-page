<template>
    <b-overlay :show="chkLoading" rounded="sm">

        <b-row>
            <b-col cols="12" style="margin:0 auto;max-width: 60%;">
                <div>
                    <b-form-select @change="getLottoData()" placeholder="xxxxxx" v-model="selectedDate" :options="lottoDates" class="mb-3" value-field="key" text-field="val" disabled-field="notEnabled"></b-form-select>
                </div>
            </b-col>
           <b-col cols="12" style="margin:0 auto;max-width: 100%;" v-if="selectedDate !== null">

                <div class="row" style="margin-top: 5%;margin-bottom: 5%;">
                    
                    <div class="col-12 text-center" style="margin-bottom: 5%;">
                        <h2> ผลสลากกินแบ่งรัฐบาล {{ lottoInfo.title }} </h2>
                    </div>
                    <!-- <div class="col-6"></div> -->


                    <div class="col-6">
                        <h2> {{ lottoData.prize_1 }} </h2>
                        <p>รางวัล {{ lottoTxt.prize_1.message }} - เงินรางวัล {{ lottoTxt.prize_1.prize }} บาท</p>
                    </div>

                    <div class="col-6">
                        <h2> {{ lottoData.prize_last2 }} </h2>
                        <p>รางวัล {{ lottoTxt.prize_last2.message }} - เงินรางวัล {{ lottoTxt.prize_last2.prize }} บาท</p>
                    </div>

                    <div class="col-6">
                        <h2> {{ lottoData.prize_last3[0] }} , {{ lottoData.prize_last3[1] }} </h2>
                        <p>รางวัล {{ lottoTxt.prize_last3.message }} - เงินรางวัล {{ lottoTxt.prize_last3.prize }} บาท</p>
                    </div>

                    <div class="col-6">
                        <h2> {{ lottoData.prize_first3[0] }} , {{ lottoData.prize_first3[1] }} </h2>
                        <p>รางวัล {{ lottoTxt.prize_first3.message }} - เงินรางวัล {{ lottoTxt.prize_first3.prize }} บาท</p>
                    </div>

                    <div class="col-12">
                        <h3> {{ lottoData.prize1_close[0] }} , {{ lottoData.prize1_close[1] }} </h3>
                        <p>รางวัล {{ lottoTxt.prize1_close.message }} - เงินรางวัล {{ lottoTxt.prize1_close.prize }} บาท</p>
                    </div>
                    
                </div>

                <div class="row" style="margin-bottom: 5%;">
                    <div class="col-12">
                        <h5>รางวัล {{ lottoTxt.prize_2.message }} - เงินรางวัล {{ lottoTxt.prize_2.prize }} บาท</h5>
                    </div>
                    <div v-for="(item, index) in lottoData.prize_2" :key="index" class="col-sm-4 col-md-2">
                        <span>{{item}}</span>
                    </div>
                </div>

                <div class="row" style="margin-bottom: 5%;">
                    <div class="col-12">
                        <h5>รางวัล {{ lottoTxt.prize_3.message }} - เงินรางวัล {{ lottoTxt.prize_3.prize }} บาท</h5>
                    </div>
                    <div v-for="(item, index) in lottoData.prize_3" :key="index" class="col-sm-4 col-md-2">
                        <span>{{item}}</span>
                    </div>
                </div>
                
                <div class="row" style="margin-bottom: 5%;">
                    <div class="col-12">
                        <h5>รางวัล {{ lottoTxt.prize_4.message }} - เงินรางวัล {{ lottoTxt.prize_4.prize }} บาท</h5>
                    </div>
                    <div v-for="(item, index) in lottoData.prize_4" :key="index" class="col-sm-4 col-md-2">
                        <span>{{item}}</span>
                    </div>
                </div>
                
                <div class="row" style="margin-bottom: 5%;">
                    <div class="col-12">
                        <h5>รางวัล {{ lottoTxt.prize_5.message }} - เงินรางวัล {{ lottoTxt.prize_5.prize }} บาท</h5>
                    </div>
                    <div v-for="(item, index) in lottoData.prize_5" :key="index" class="col-sm-4 col-md-2">
                        <span>{{item}}</span>
                    </div>
                </div>
                
                


            </b-col>
        </b-row>

    </b-overlay>
    
</template>

<script>
import { HTTP } from '@/axios.js';

export default {
    name: 'NumberTable',
    data() {
        return {
            chkLoading: false,
            lottoDates: [
                { key: null, val: 'Please select date.' },
            ],
            selectedDate: null,
            lottoTxt: [],
            lottoData: [],
            lottoInfo: {}
        }
    },
    mounted () {
       this.getLottoDates();
    },
    methods: {
        async getLottoDates() {
            await HTTP.get(`/`).then(res => {
                if(res.data.data.length > 0) {
                    this.lottoDates = this.lottoDates.concat(res.data.data)
                }
            })
        },
        async getLottoData() {
            this.chkLoading = true;

            await HTTP.get(`/${this.selectedDate}`).then(res => {
                this.chkLoading = false;

                if(!res.data.status) {
                    alert(res.data.message)
                } else {
                    this.lottoData = res.data.data.prize;  
                    this.lottoTxt = res.data.data.wording;  
                    this.lottoInfo = res.data.data.info;
                }
                
            })
        },
        // async chkPrize() {
        //     this.showHasPrizeAlert = false;

        //     setTimeout(() => {
        //         this.showHasPrizeAlert = true;  
        //     }, 2000);
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 767px) {
    .col-12 {
        max-width: 100% !important;
    }
}
</style>
