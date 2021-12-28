<template>
    <div class="container">
        <div class="login-form">
            <h3 class="title">登录</h3>
            <a-form ref="formRef" :model="form" :rules="rules">
                <a-form-item label="账号" name="name">
                    <a-input v-model:value="form.name" placeholder="用户名/邮箱/手机" :disabled="loading" />
                </a-form-item>
                <a-form-item label="密码" name="password">
                    <a-input v-model:value="form.password" type="password" :disabled="loading" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onSubmit" :disabled="loading">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useLoginHook } from "./useLoginHook"

const { form, rules, onSubmit, loading, formRef } = useLoginHook()
</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    background: #f1f5f1;
    padding-top: 100px;

    .title {
        text-align: center;
        margin-bottom: 30px;
    }

    .login-form {
        width: 500px;
        margin: 0 auto;
        background: #fff;
        padding: 30px 60px;
    }
}
</style>
