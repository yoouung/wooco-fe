const data = {
  user_info: {
    user_id: 123,
    name: '홍인데유',
    profile_url:
      'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
  },
  place_info: {
    summary: {
      star_rate_avg: 3.5,
      total_place: 30,
    },
    places: [
      {
        id: 1,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content:
          '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
      {
        id: 2,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content: '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
      {
        id: 3,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content: '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
      {
        id: 4,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content: '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
      {
        id: 5,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content:
          '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
      {
        id: 6,
        name: '주먹왕김밥',
        star_rate: '3.5',
        created_at: '2024.11.29',
        tags: ['맛', '분위기'],
        images: [
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',
        ],
        content:
          '김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리 김밥 존맛탱탱탱탱탱탱탱탱탱탱구리',
      },
    ],
  },
  course_info: {
    summary: {
      total_course: 30,
    },
    courses: [
      {
        id: 1,
        name: '금강산도 식후경',
        location: '강남구',
        categories: ['SNS 핫플', '맛집투어', '쇼핑'],
        image:
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',

        likes: 200,
        comments: 200,
        views: 300,
      },
      {
        id: 2,
        name: '금강산도 식후경',
        location: '강남구',
        categories: ['SNS 핫플', '맛집투어', '쇼핑'],
        image:
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',

        likes: 200,
        comments: 200,
        views: 300,
      },
      {
        id: 3,
        name: '금강산도 식후경',
        location: '강남구',
        categories: ['SNS 핫플', '맛집투어', '쇼핑'],
        image:
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',

        likes: 200,
        comments: 200,
        views: 300,
      },
      {
        id: 4,
        name: '금강산도 식후경',
        location: '강남구',
        categories: ['SNS 핫플', '맛집투어', '쇼핑'],
        image:
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',

        likes: 200,
        comments: 200,
        views: 300,
      },
      {
        id: 5,
        name: '금강산도 식후경',
        location: '강남구',
        categories: ['SNS 핫플', '맛집투어', '쇼핑'],
        image:
          'https://i.namu.wiki/i/XBTITffPBgbYeUbLBGJ8fhHnVk96KPtUzCgaF_65AoYtHio-mwd5Jzc7m-LGeFCWG-NWu3KgCXv4_VtAkQYBIf4ndOeq9GDs-XLu80Zx_ALXckL0poDLSP79ZLVJkuNv1E1cQweVsGN3IG7IAgBAVw.webp',

        likes: 200,
        comments: 200,
        views: 300,
      },
    ],
  },
}

export default function getData() {
  return data
}