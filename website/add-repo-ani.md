---
# SPDX-License-Identifier: Apache-2.0
title: "Add repository"
description: "Add this repository to Aniyomi."
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { GITHUB_EXTENSION_MIN_JSON_ANI } from "./.vitepress/config/constants";

    const isAndroid = ref(true);
    const decodedUrl = ref("");

    onMounted(() => {
        isAndroid.value = !!navigator.userAgent.match(/android/i);
        decodedUrl.value = new URLSearchParams(window.location.search).get("url");    

        const reencodedUrl = encodeURIComponent(decodedUrl.value);

        if (isAndroid.value) {
            if (decodedUrl == GITHUB_EXTENSION_MIN_JSON_ANI) {
                window.goatcounter?.count?.({
                    path: "/#add-to-aniyomi",
                    title: "Add extension repository",
                });
            }

            window.location.replace(`aniyomi://add-repo?url=${reencodedUrl}`);
        }
    });
</script>

<div v-if="isAndroid">
    You should be redirected to Aniyomi in a moment. Refresh the page if it doesn't work,
    or add the repo manually using this link:
</div>
<div v-else>
    Unsupported operating system. Aniyomi is an <strong>Android</strong> app only. Please add
    the repo manually using this link:
</div>

<a :href="decodedUrl">{{ decodedUrl }}</a>
