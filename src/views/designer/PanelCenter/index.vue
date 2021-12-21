<template>
  <div class="panel-center">
    <div class="wrapper">
      <div class="head">
        <div class="title">{{'测试表达' }}</div>
        <div class="desc">{{ '测试表达' }}</div>
      </div>
      <div class="content">
        <div class="form">
          <ItemControl>
            <div class="form-item">
              <div class="title">
                <div class="tit">文本框<span style="color: red">*</span></div>
                <div class="txt"></div>
              </div>
              <div class="det">
                <div class="component">
                  <a-input/>
<!--                  <FormItem :data="item" v-model="form[item.id]" />-->
                </div>
              </div>
            </div>
          </ItemControl>
          <ItemControl>
            <div class="form-item">
              <div class="title">
                <div class="tit">单选<span style="color: red">*</span></div>
                <div class="txt"></div>
              </div>
              <div class="det">
                <div class="component">
                  <a-radio-group >
                    <a-radio :value="1" :style="radioStyle">Option A</a-radio>
                    <a-radio :value="2" :style="radioStyle">Option B</a-radio>
                  </a-radio-group>
                </div>
              </div>
            </div>
          </ItemControl>
          <ItemControl>
            <div class="form-item">
              <div class="title">
                <div class="tit">多选<span style="color: red">*</span></div>
                <div class="txt"></div>
              </div>
              <div class="det">
                <div class="component">
                  <a-checkbox>Checkbox1</a-checkbox>
                  <br />
                  <a-checkbox>Checkbox2</a-checkbox>
                  <br />
                  <a-checkbox>Checkbox3</a-checkbox>
                </div>
              </div>
            </div>
          </ItemControl>
          <ItemControl>
            <div class="form-item">
              <div class="title">
                <div class="tit">下拉<span style="color: red">*</span></div>
                <div class="txt"></div>
              </div>
              <div class="det">
                <div class="component">
                  <a-select ref="select" style="width: 100%">
                    <a-select-option value="jack">Jack</a-select-option>
                  </a-select>
                  <!--                  <FormItem :data="item" v-model="form[item.id]" />-->
                </div>
              </div>
            </div>
          </ItemControl>
          <ItemControl :isEmpty="true">
            <div class="form-item">
              <div class="empty">请从左侧点击拖拽组件</div>
            </div>
          </ItemControl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  import ItemControl from "./ItemControl.vue"
  // import ContentType from "@/views/designer/interface"
  // const props = withDefaults(defineProps<ContentType>(),{
  //
  // })
  const radioStyle = reactive({
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  });
</script>

<style lang="scss" scoped>
.panel-center{
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  min-height: calc(100vh - 50px);
  background: #f1f5f1;
  padding: 10px 0;
  .wrapper{
    background: rgba(255, 255, 255, 0.9);
    min-height: calc(100vh - 70px);
    width: 800px;
    margin: 0 auto;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.05);
    .head {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.4;
      }
      .desc {
        margin-top: 10px;
      }
    }
    .content{
      .form{
        .form-item{
          padding: 12px 30px;
          pointer-events: none;
          .title {
            margin-bottom: 10px;
            .tit{

            }
            .txt {
              color: #999;
            }
          }
          .det {
            padding-left: 10px;
            .component {
              width: 80%;
            }
          }
          .empty {
            text-align: center;
            padding: 30px 0;
            color: #999;
          }
        }
      }
    }
  }
}

</style>