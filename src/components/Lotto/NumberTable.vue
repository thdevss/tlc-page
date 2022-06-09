<template>
    <b-overlay :show="chkLoading" rounded="sm">

        <b-row>
            <b-col cols="12" style="margin:0 auto;max-width: 60%;">
                <div>
                    <b-form-select @change="getLottoData()" placeholder="xxxxxx" v-model="selectedDate" :options="lottoDates" class="mb-3" value-field="key" text-field="val" disabled-field="notEnabled"></b-form-select>
                </div>
            </b-col>
           <b-col cols="12" style="margin:0 auto;max-width: 100%;">
                
                <div style="padding-top:2%;">
                    <div v-for="(item, index) in lottoData.prize_5" :key="index">
                        <p>{{item}}</p>
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
            
            lottoData: []
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
</style>
