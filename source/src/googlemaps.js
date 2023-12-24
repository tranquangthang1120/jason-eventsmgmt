// GoogleMap.js
import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Hàm này sẽ chạy sau khi component được render
    loadMap();
  }, []);

  const loadMap = () => {
    // Tạo một đối tượng bản đồ mới với các tùy chọn
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Thay thế với tọa độ của địa chỉ bạn muốn hiển thị
      zoom: 14,
    });

    // Tạo đánh dấu trên bản đồ (tùy chọn)
    const marker = new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: 'Your Location',
    });
  };

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default GoogleMap;
