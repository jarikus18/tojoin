<template>
  <div class="page">
    <div class="head">
      <SectionTop
        :title="$prismic.asText(data.title)"
        :description="$prismic.asHtml(data.subtitle)"
      />
    </div>
    <div class="prices">
      <div class="container">
        <div class="prices-wrapper desktop">
          <div class="prices-story">
            <div class="prices-body">
              <div class="table">
                <div class="table-body">
                  <div class="table-row">
                    <div class="table-cell heading">&nbsp;</div>
                    <div class="table-cell heading">
                      <div class="tariff_free">{{ data.tariff_free }}</div>
                    </div>
                    <div class="table-cell heading">
                      <!-- eslint-disable vue/no-v-html -->
                      <div
                        class="tariff_paid"
                        v-html="$prismic.asHtml(data.tariff_paid)"
                      />
                      <!-- eslint-enable vue/no-v-html -->
                    </div>
                  </div>
                  <div
                    v-for="(item, index) in data.tariff_conditions"
                    :key="index"
                    class="table-row condition"
                  >
                    <div class="table-cell condition-name">
                      {{ item.condition_name }}
                    </div>
                    <div class="table-cell">
                      <div
                        v-if="item.available_for_free"
                        class="condition-value"
                      >
                        <Okay />
                      </div>
                      <div v-else class="line" />
                    </div>
                    <div class="table-cell">
                      <div class="condition-value">
                        <Okay color="#FEB62B" />
                      </div>
                    </div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell">&nbsp;</div>
                    <div class="table-cell buttons">
                      <NavLink
                        :href="data.tariff_free_link.url"
                        :type="data.tariff_free_link.link_type"
                        classname="btn-common green-bg"
                      >
                        {{ data.tariff_free_button }}
                      </NavLink>
                    </div>
                    <div class="table-cell buttons">
                      <NavLink
                        :href="data.tariff_paid_link.url"
                        :type="data.tariff_paid_link.link_type"
                        classname="btn-common"
                      >
                        {{ data.tariff_paid_button }}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="prices-story-line1" />
          <span class="prices-story-line2" />
        </div>

        <div class="prices-wrapper mobile">
          <div class="prices-story">
            <div class="table-mobile">
              <div class="list">
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="tariff_paid"
                  v-html="$prismic.asHtml(data.tariff_paid)"
                />
                <!-- eslint-enable vue/no-v-html -->
                <div
                  v-for="(item, index) in data.tariff_conditions"
                  :key="index"
                  class="condition"
                >
                  <div class="condition-name">
                    {{ item.condition_name }}
                  </div>
                  <div class="cell">
                    <div class="condition-value">
                      <Okay color="#FEB62B" />
                    </div>
                  </div>
                </div>
                <div class="cell buttons">
                  <NavLink
                    :href="data.tariff_paid_link.url"
                    :type="data.tariff_paid_link.link_type"
                    classname="btn-common"
                  >
                    {{ data.tariff_paid_button }}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <span class="prices-story-line1" />
          <span class="prices-story-line2" />
        </div>

        <div class="prices-wrapper mobile">
          <div class="prices-story">
            <div class="table-mobile">
              <div class="list">
                <div class="tariff_free">
                  {{ data.tariff_free }}
                </div>

                <div
                  v-for="(item, index) in data.tariff_conditions"
                  :key="index"
                  class="condition"
                >
                  <div class="condition-name">
                    {{ item.condition_name }}
                  </div>
                  <div class="cell">
                    <div v-if="item.available_for_free" class="condition-value">
                      <Okay />
                    </div>
                    <div v-else class="line" />
                  </div>
                </div>

                <div class="cell buttons">
                  <NavLink
                    :href="data.tariff_free_link.url"
                    :type="data.tariff_free_link.link_type"
                    classname="btn-common green-bg"
                  >
                    {{ data.tariff_free_button }}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <span class="prices-story-line1" />
          <span class="prices-story-line2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTop from '@/components/sections/SectionTop'
import NavLink from '@/components/NavLink'
import { Okay } from '@/components/decor'

export default {
  components: { SectionTop, NavLink, Okay },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 250px;
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 100px;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
  }
}
.prices {
  &-wrapper {
    position: relative;
    max-width: 1480px;
    margin: 0 auto 20px;
    &.mobile {
      display: none;
    }
  }
  &-story {
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    background: #fff;
    z-index: 3;
    &::before {
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
      width: 100%;
      background: url('~/assets/images/pages/price-table-header.svg') no-repeat;
      height: 200px;
    }
    &-line1 {
      display: block;
      background: #fff;
      box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
      border-radius: 0 0 20px 20px;
      width: 94%;
      margin: -20px auto 0;
      height: 45px;
      position: relative;
      z-index: 2;
    }
    &-line2 {
      display: block;
      background: #fff;
      box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
      border-radius: 0 0 20px 20px;
      width: 88%;
      margin: -20px auto 0;
      height: 45px;
      position: relative;
      z-index: 1;
    }
  }
  @media (max-width: 767px) {
    &-wrapper {
      &.mobile {
        display: block;
        padding: 0 15px;
        margin-bottom: 50px;
      }
      &.desktop {
        display: none;
      }
    }
    &-story {
      &-line1 {
        margin: -20px auto 0;
        height: 35px;
      }
      &-line2 {
        margin: -20px auto 0;
        height: 35px;
      }
      &::before {
        background: url('~/assets/images/pages/price-table-header.svg')
          no-repeat 40% 0 / 1350px;
        top: -40px;
        height: 170px;
      }
    }
  }
}
.table {
  display: table;
  width: 100%;
  &-row {
    display: table-row;
  }
  & .heading {
    width: 33.33%;
    padding-top: 120px;
    border-bottom: 2px solid #c5dcff;
    vertical-align: bottom;
    padding-bottom: 10px;
  }
  &-cell {
    border-right: 2px solid #c5dcff;
    display: table-cell;
    padding: 3px 10px;
    &:last-child {
      border-right: none;
    }
  }
  &-body {
    display: table-row-group;
  }
}
.condition {
  margin-bottom: 20px;
  &-name {
    padding-left: 50px;
    padding-top: 35px;
    font-weight: bold;
    font-size: 34px;
    line-height: 46px;
  }
  &-value {
    background: #fff;
    box-shadow: 0px 9px 18px -5px rgba(84, 48, 209, 0.35);
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  & .line {
    width: 46px;
    margin: auto;
    border: 2px solid #929292;
    margin-bottom: 12px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 85%;
    margin-bottom: 20px;
    &-name {
      padding-left: 25px;
      padding-top: 0;
      font-size: 20px;
      line-height: 27px;
      color: #6a6a6a;
    }
    &-value {
      width: 38px;
      height: 38px;
      & svg {
        max-width: 18px;
      }
    }
    & .line {
      width: 29px;
      margin-bottom: 2px;
    }
  }
}

.tariff {
  &_free {
    font-weight: bold;
    font-size: 50px;
    line-height: 154%;
    text-align: center;
    color: #5dcd5d;
  }
  &_paid {
    font-weight: bold;
    font-size: 40px;
    line-height: 124%;
    text-align: center;
    color: #feb62b;
    &::v-deep strong {
      font-size: 54px;
      font-weight: bold;
    }
  }
  @media (max-width: 767px) {
    &_free {
      margin-top: 100px;
      border-bottom: 1px solid #aaccff;
      padding-bottom: 10px;
      margin-bottom: 30px;
      font-size: 26px;
      line-height: 122%;
    }
    &_paid {
      margin-top: 100px;
      border-bottom: 1px solid #aaccff;
      padding-bottom: 10px;
      margin-bottom: 30px;
      font-size: 26px;
      line-height: 122%;
      &::v-deep strong {
        font-size: 26px;
        line-height: 122%;
        font-weight: bold;
      }
    }
  }
}
.buttons {
  padding: 50px 0 80px;
  text-align: center;
  @media (max-width: 767px) {
    padding: 20px 0 40px;
  }
}
</style>
