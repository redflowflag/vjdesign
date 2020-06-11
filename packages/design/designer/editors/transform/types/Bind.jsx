import Vue from "vue";

export default Vue.extend({
  props: {
    value: Object
  },
  render() {
    return (
      <div>
        <el-form-item
          label="来源"
          prop="$source"
          rules={[{ required: true, message: "必填项" }]}
        >
          <el-input v-model={this.value.$source}></el-input>
        </el-form-item>
      </div>
    );
  }
});